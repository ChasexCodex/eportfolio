import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="w-full border-b py-4">
      <div className="flex flex-row w-full justify-around font-bold">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}