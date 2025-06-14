import Navbar from '../components/Navbar'

export default function Expenses() {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">💸 Expense Tracker</h1>
        <p className="text-gray-600">Track who paid for what. Shared finance made easy.</p>
      </div>
    </>
  )
}
