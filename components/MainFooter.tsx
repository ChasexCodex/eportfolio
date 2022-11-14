import Image from 'next/image'

export default function MainFooter() {
  return (
      <footer className="w-full px-4 lg:px-20 bg-gradient-to-b from-zinc-900 to-zinc-800 via-zinc-900 shadow-xl mt-auto flex flex-col lg:flex-row">
        <form className="flex flex-col pt-10 lg:w-1/3 space-y-4">
          <p className="font-bold text-4xl">Contact:</p>
          <label htmlFor="name" className="flex">
            <span className="text-xl">Name:</span>
            <input className="w-72 px-2 ml-auto rounded ring-2 ring-blue-600" type="text" name="name" placeholder="Enter name..."/>
          </label>
          <label htmlFor="email" className="flex">
            <span className="text-xl">Email:</span>
            <input className="w-72 px-2 ml-auto rounded ring-2 ring-blue-600" type="text" name="email" placeholder="Enter email..."/>
          </label>
          <label htmlFor="subject" className="flex">
            <span className="text-xl">Subject:</span>
            <input className="w-72 px-2 ml-auto rounded ring-2 ring-blue-600" type="text" name="subject" placeholder="Enter subject..."/>
          </label>
          <label htmlFor="details" className="flex">
            <span className="text-xl">Details:</span>
            <input className="w-72 px-2 ml-auto rounded ring-2 ring-blue-600" type="text" name="details" placeholder="Enter details..."/>
          </label>
        </form>
        <div className="w-min rounded-full overflow-hidden my-10 bg-zinc-300 ring ring-gray-700 mx-auto lg:ml-auto lg:mr-0 p-10">
          <div className="relative h-40 w-40">
            <Image src="/logo.png" fill alt=""/>
          </div>
        </div>
      </footer>
  )
}