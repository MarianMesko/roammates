import { useState } from 'react';

const sampleMessages = [
  { id: 1, user: 'Alice', text: 'Hey everyone! Ready for the trip?', time: '10:00 AM' },
  { id: 2, user: 'Bob', text: 'Absolutely! Got my bags packed 🎒', time: '10:02 AM' },
  { id: 3, user: 'Charlie', text: 'Can’t wait to see the itinerary 🗺️', time: '10:05 AM' },
];

export default function Chat() {
  const [messages, setMessages] = useState(sampleMessages);
  const [input, setInput] = useState('');

  function sendMessage() {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      user: 'You',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setInput('');
  }

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-y-auto mb-4 bg-white rounded shadow p-4">
        {messages.map(({ id, user, text, time }) => (
          <div key={id} className={`mb-3 flex ${user === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                user === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
              }`}
            >
              <div className="text-sm font-semibold">{user}</div>
              <div>{text}</div>
              <div className="text-xs text-right opacity-60">{time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
