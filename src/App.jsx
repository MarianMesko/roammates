import { useState } from 'react'
import Chat from './components/Chat'
import Polls from './components/Polls'
import Itinerary from './components/Itinerary'
import Expenses from './components/Expenses'
import Gallery from './components/Gallery'

export default function App() {
  const [activeTab, setActiveTab] = useState('chat')

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-48 bg-gray-900 text-white flex flex-col p-4 space-y-4">
        <button onClick={() => setActiveTab('chat')} className="hover:text-blue-400">💬 Chat</button>
        <button onClick={() => setActiveTab('polls')} className="hover:text-blue-400">📊 Polls</button>
        <button onClick={() => setActiveTab('itinerary')} className="hover:text-blue-400">📅 Itinerary</button>
        <button onClick={() => setActiveTab('expenses')} className="hover:text-blue-400">💰 Expenses</button>
        <button onClick={() => setActiveTab('gallery')} className="hover:text-blue-400">📷 Gallery</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        {activeTab === 'chat' && <Chat />}
        {activeTab === 'polls' && <Polls />}
        {activeTab === 'itinerary' && <Itinerary />}
        {activeTab === 'expenses' && <Expenses />}
        {activeTab === 'gallery' && <Gallery />}
      </div>
    </div>
  )
}
