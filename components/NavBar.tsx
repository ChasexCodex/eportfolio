import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="py-4 border-b">
      <div className="flex flex-row w-full justify-around font-bold text-lg lg:text-2xl">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}