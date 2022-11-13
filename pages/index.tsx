import Page from '../components/Page'
import MainHeader from '../components/MainHeader'
import NavBar from '../components/NavBar'
import MainFooter from '../components/MainFooter'
import Image from 'next/image'
import Link from 'next/link'

const Banners = () => {
  return (
    <div className="space-y-40 w-3/4 mx-auto">
      <Link href="/work/code">
        <div className="h-[35rem] shadow-xl rounded px-4 pt-10 relative bg-gradient-to-br from-gray-400">
          <p className="text-5xl font-bold pl-6">Coding and Software</p>
          <Image src="/images/coding.png" alt="alt" className="object-cover -z-10" fill/>
        </div>
      </Link>

      <Link href="/work/english">
        <div className="h-[35rem] shadow-xl rounded px-4 pt-10 relative bg-gradient-to-br from-orange-700">
          <p className="text-4xl font-bold pl-6">English 104 Research and Study</p>
          <Image src="/images/library.jpg" alt="alt" className="object-cover -z-10" fill/>
        </div>
      </Link>

      <Link href="/work/design">
        <div className="h-[35rem] shadow-xl rounded px-4 pt-10 relative bg-gradient-to-br from-blue-400">
          <p className="text-4xl font-bold pl-6">Graphics and Design</p>
          <Image src="/images/deer.jpg" alt="alt" className="object-cover -z-10" fill/>
        </div>
      </Link>

      <Link href="/work/music">
        <div className="h-[35rem] shadow-xl rounded px-4 pt-10 relative bg-gradient-to-br from-purple-400">
          <p className="text-5xl font-bold pl-6">Music</p>
          <Image src="/images/ableton.png" alt="alt" className="object-cover -z-10" fill/>
        </div>
      </Link>
    </div>
  )
}

export default function Home() {
  return (
    <Page className="relative">
      <div className="no-bar fixed inset-0" style={{
        backgroundImage: `url(/images/bg.jpg)`,
        backgroundSize: 'cover',
        zIndex: -100,
      }}/>
      <div className="h-screen">
        <NavBar/>
        <MainHeader/>
        <div className="relative w-60 h-60 lg:w-96 lg:h-96 mx-auto my-10">
          <Image src="/images/profile/round.jpg" alt="Profile Image" className="rounded-full ring ring-white" fill/>
        </div>
      </div>
      <div>
        <video src="/loader.mp4" className="mx-auto w-screen shadow-xl" autoPlay loop controls={false}/>
      </div>
      <Banners/>
      <MainFooter/>
    </Page>
  )
}
