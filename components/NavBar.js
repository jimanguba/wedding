'use client'

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[90%] sm:max-w-lg bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 shadow z-50 overflow-x-auto sm:overflow-x-visible">
      <ul className="flex justify-center gap-6 text-sm font-medium whitespace-nowrap px-2">
        <li><a href="#home" className="inline-block px-3 py-1 hover:text-[color:#800000] transition">Home</a></li>
        <li><a href="#venue" className="inline-block px-3 py-1 hover:text-[color:#800000] transition">Venue</a></li>
        <li><a href="#faq" className="inline-block px-3 py-1 hover:text-[color:#800000] transition">FAQ</a></li>
        <li><a href="#team" className="inline-block px-3 py-1 hover:text-[color:#800000] transition">Team</a></li>
        <li><a href="#registry" className="inline-block px-3 py-1 hover:text-[color:#800000] transition">Registry</a></li>
        <li><a href="#rsvp" className="inline-block px-3 py-1 hover:text-[color:#800000] transition">RSVP</a></li>
      </ul>
    </nav>

  )
}
