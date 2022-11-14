import Page from '../../../components/Page'
import NavBar from '../../../components/NavBar'
import MainFooter from '../../../components/MainFooter'
import Link from 'next/link'

export default function Music() {
  return (
    <Page>
      <NavBar/>
      <div className="px-10">
        <p className="text-center text-5xl lg:text-7xl font-extrabold py-2">
          Music: Fire of the Soul
        </p>
      </div>
      <div className="grid grid-cols-1 px-10 lg:w-2/3 mx-auto gap-8 py-10">
        <Link href="/work/music/life"
              className="px-4 h-96 bg-gradient-to-b from-black to-gray-600 block rounded-r-2xl shadow-sm shadow-white">
          <p className="py-4 text-2xl lg:text-3xl font-semibold">
            Life (E3)
          </p>
          <p className="lg:w-80">
            I made this a year ago, and I cannot tell what me able to do so.
          </p>
        </Link>
      </div>
      <MainFooter/>
    </Page>
  )
}