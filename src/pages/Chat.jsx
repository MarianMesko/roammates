import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import { supabase } from '../supabaseClient'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  // Scroll to bottom helper
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Fetch existing messages on mount
  useEffect(() => {
    fetchMessages(){
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true })
      if (error) {
        console.error('Error fetching messages:', error)
      } else {
        console.log('Fetched messages:', data) // <-- Add this
        setMessages(data)
      }
    }
    const subscription = supabase
      .channel('public:messages')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
        setMessages(current => [...current, payload.new])
      })
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  async function fetchMessages() {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: true })
    if (error) {
      console.error('Error fetching messages:', error)
    } else {
      setMessages(data)
    }
  }

  async function sendMessage() {
    if (input.trim() === '') return

    const userName = 'You' // For now, static user name

    const { error } = await supabase.from('messages').insert([{ user_name: userName, text: input }])
    if (error) {
      console.error('Error sending message:', error)
    } else {
      setInput('')
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 flex flex-col h-[80vh]">
        <h1 className="text-3xl font-bold mb-4">💬 Group Chat</h1>
        <div className="flex-1 overflow-y-auto border rounded-lg p-4 bg-white shadow">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`mb-3 flex ${msg.user_name === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.user_name === 'You'
                    ? 'bg-purple-600 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                <div className="text-sm font-semibold">{msg.user_name}</div>
                <div className="mt-1 whitespace-pre-wrap">{msg.text}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="mt-4 flex gap-2">
          <textarea
            rows={2}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 resize-none border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            onClick={sendMessage}
            className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </>
  )
}
