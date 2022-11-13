import React from 'react'

export default function MainFooter() {
  return (
      <footer className="w-full pt-10 pb-6 bg-gray-900 mt-10 shadow-xl">
        <form className="flex flex-col w-1/3 ml-20 space-y-4">
          <p className="font-bold text-4xl">Contact:</p>
          <label htmlFor="name" className="flex">
            <span className="text-xl">Name:</span>
            <input className="w-72 ml-auto rounded ring-2 ring-blue-600" type="text" name="name"/>
          </label>
          <label htmlFor="email" className="flex">
            <span className="text-xl">Email:</span>
            <input className="w-72 ml-auto rounded ring-2 ring-blue-600" type="text" name="email"/>
          </label>
          <label htmlFor="subject" className="flex">
            <span className="text-xl">Subject:</span>
            <input className="w-72 ml-auto rounded ring-2 ring-blue-600" type="text" name="subject"/>
          </label>
          <label htmlFor="details" className="flex">
            <span className="text-xl">Details:</span>
            <input className="w-72 ml-auto rounded ring-2 ring-blue-600" type="text" name="details"/>
          </label>
        </form>
      </footer>
  )
}