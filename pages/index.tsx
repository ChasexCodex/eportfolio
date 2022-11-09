import Page from '../components/Page'
import MainHeader from '../components/MainHeader'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

export default function Home() {
  return (
    <Page className="relative">
      <Parallax pages={3} className="no-bar">
        <ParallaxLayer offset={0} speed={1} style={{
          backgroundImage: `url(/images/bg.jpg)`,
          backgroundSize: 'cover',
        }}>
          <NavBar/>
          <MainHeader/>
          <div className="relative w-60 h-60 lg:w-96 lg:h-96 mx-auto my-10">
            <Image src="/images/profile/round.jpg" alt="Profile Image" className="rounded-full ring ring-white" fill/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99999} speed={2}>
          <main className="flex flex-col pt-10">
            <video src="/digital_world.mp4" autoPlay={true} loop={true} controls={false}/>
          </main>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} style={{
          backgroundImage: `url(/images/bg.jpg)`,
          backgroundSize: 'cover',
        }}>

        </ParallaxLayer>
      </Parallax>
    </Page>
  )
}
