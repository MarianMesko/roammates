import Navbar from '../components/Navbar'

export default function Photos() {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">📸 Trip Photos</h1>
        <p className="text-gray-600">All the group’s memories in one shared gallery.</p>
      </div>
    </>
  )
}
