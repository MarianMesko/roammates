import Navbar from '../components/Navbar'

export default function Chat() {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">💬 Group Chat</h1>
        <p className="text-gray-600 mb-6">This is where you chat with your tripmates. Real-time messaging coming soon.</p>
        {/* Chat UI to be built here */}
      </div>
    </>
  )
}
