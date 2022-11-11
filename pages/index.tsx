import Page from '../components/Page'
import MainHeader from '../components/MainHeader'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

export default function Home() {
  return (
    <Page className="relative">
      <Parallax pages={4} className="no-bar" style={{
        backgroundImage: `url(/images/bg.jpg)`,
        backgroundSize: 'cover',
      }}>
        <ParallaxLayer offset={0} speed={1} factor={1}>
          <NavBar/>
          <MainHeader/>
          <div className="relative w-60 h-60 lg:w-96 lg:h-96 mx-auto my-10">
            <Image src="/images/profile/round.jpg" alt="Profile Image" className="rounded-full ring ring-white" fill/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} factor={1}>
          <video src="/digital_world.mp4" className="mx-auto h-full" autoPlay={true} loop={true} controls={false}/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} factor={1}>
          <footer className="w-full">
            con
          </footer>
        </ParallaxLayer>
      </Parallax>
    </Page>
  )
}
