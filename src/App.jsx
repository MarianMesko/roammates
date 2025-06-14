export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-purple-600">Roammates</div>
          <nav className="space-x-4">
            <a href="#features" className="text-gray-700 hover:text-purple-600">Features</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a>
            <a href="#" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Travel Together, Plan Together
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Group chat, polls, itinerary, shared expenses, photos—and everything to make your group journey seamless.
          </p>
          <a href="#features" className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-700">
            See How It Works
          </a>
        </div>
      </section>

      {/* Features Section Placeholder */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Feature cards will go here in next steps */}
        </div>
      </section>

      <footer id="contact" className="bg-white py-10 text-center text-gray-600">
        © {new Date().getFullYear()} Roammates. All rights reserved.
      </footer>
    </div>
  )
}
