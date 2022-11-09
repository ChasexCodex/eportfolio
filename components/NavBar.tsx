import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="py-4 border-t border-b">
      <div className="flex flex-row w-full justify-around font-bold text-lg">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}