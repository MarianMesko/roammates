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

      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Your Group Travel Toolkit</h2>
          <p className="mt-4 text-lg text-gray-600">Everything you need to plan, share, and enjoy your trip—together.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Group Chat",
              desc: "Centralized group conversation to coordinate, share updates, and have fun.",
              emoji: "💬"
            },
            {
              title: "Activity Polls",
              desc: "Let everyone vote on what to do next. Instant democracy.",
              emoji: "📊"
            },
            {
              title: "Itinerary + Timeline",
              desc: "Organize all your activities, bookings, and plans in one shared view.",
              emoji: "🗺️"
            },
            {
              title: "Expense Sharing",
              desc: "Split costs automatically and track who owes what.",
              emoji: "💸"
            },
            {
              title: "Photo Sharing",
              desc: "Upload and view memories from all participants in one place.",
              emoji: "📸"
            },
            {
              title: "More Coming!",
              desc: "Feedback forms, restaurant suggestions, shared maps—stay tuned.",
              emoji: "✨"
            }
          ].map((feat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feat.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>



      <footer id="contact" className="bg-white py-10 text-center text-gray-600">
        © {new Date().getFullYear()} Roammates. All rights reserved.
      </footer>
    </div>
  )
}
