import Page from '../components/Page'
import MainHeader from '../components/MainHeader'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <Page className="py-10 container">
      <main className="flex flex-col">
        <MainHeader/>
        <div className="pt-10 flex justify-center items-center">
          {/*<MaskedImage width="810" height="1080"*/}
          {/*             src1="images/profile/normal.jpg"*/}
          {/*             src2="images/profile/cipher.png"/>*/}
          {/*<Image alt="Profile Image" src="/images/profile/normal_profile.jpg" width={405} height={540}/>*/}
        </div>
        {/*<div className="mx-auto absolute inset-0 overflow-clip z-10">*/}
        {/*  <video src="/Digital_World.mp4" autoPlay={true} loop={true}/>*/}
        {/*</div>*/}
      </main>
        <NavBar/>
    </Page>
  )
}
