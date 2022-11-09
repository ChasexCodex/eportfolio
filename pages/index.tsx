import Page from '../components/Page'
import MainHeader from '../components/MainHeader'
import NavBar from '../components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <Page className="py-10 mx-auto">
      <MainHeader/>
      <div className="relative w-60 h-60 mx-auto my-10">
        <Image src="/images/profile/round.jpg" alt="Profile Image" className="rounded-full ring ring-white" fill/>
      </div>
      <NavBar/>
      <main className="flex flex-col pt-10">
        <video src="/Digital_World.mp4" autoPlay={true} loop={true}/>
      </main>
    </Page>
  )
}
