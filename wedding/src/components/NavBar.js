'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md z-50">
      <ul className="flex gap-4 text-sm font-medium text-gray-700">
        <li><a href="#home" className="hover:text-pink-500 transition">Home</a></li>
        <li><a href="#venue" className="hover:text-pink-500 transition">Venue</a></li>
        <li><a href="#faq" className="hover:text-pink-500 transition">FAQ</a></li>
        <li><a href="#team" className="hover:text-pink-500 transition">Team</a></li>
        <li><a href="#registry" className="hover:text-pink-500 transition">Registry</a></li>
        <li><a href="#rsvp" className="hover:text-pink-500 transition">RSVP</a></li>
      </ul>
    </nav>
  )
}
