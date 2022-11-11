import Page from '../components/Page'
import MainHeader from '../components/MainHeader'
import NavBar from '../components/NavBar'
import Image from 'next/image'

export default function About() {
  return (
    <Page style={{
      backgroundImage: `url(/images/bg.jpg)`,
      backgroundSize: 'cover',
    }}>
      <NavBar/>
      <MainHeader/>
      <main className="flex flex-col mx-auto mx-8 pt-20">
        <div className="mr-20 flex flex-row">
          <div>
            <p className="text-4xl font-bold pb-4">Biography</p>
            <p className="text-2xl w-[40rem]">
              Elyas Al-Amri is a young yet professional computer programmer.
              He works in all fields: web, mobile, games, desktop, and cloud infrastructure.
              He started as a Minecraft gamer and worked his way to get an internship and a job in Yemen.
              Now, he is freshman at Hamad Bin Khalifa University trying to get his degree and get recognized.
            </p>
          </div>
          <div className="ml-auto relative w-60 h-60 lg:w-96 lg:h-96">
            <Image src="/images/profile/round.jpg" alt="Profile Image" className="rounded-full ring ring-white" fill/>
          </div>
        </div>
        <div className="py-10">
          <p className="text-4xl pb-4 font-bold">Story</p>
          <p className="w-2/3">
            Elyas Al-Amri is a Yemeni individual. He has loved computers since he could remember. When he was 10, he
            went to Malaysia with his family and stayed there for two years. He grew up learning to speak with people in
            English. He also saw a wide range of technological sophistication, which has defined him as the character he
            is now.
            <br/>
            <br/>
            When he returned to Yemen, he was introduced to the iPad and the internet, and from there, he went forward
            in technology. Over time, he explored every aspect of computers. He experimented with 3D graphics. Then he
            switched to music production. Then he found his ultimate phase: programming. And continued – and still does
            – learning about programming and computer concepts to the point that he is capable of running services on
            Cloud providers at Microsoft and Google.
            <br/>
            <br/>
            He is now studying at Hamad Bin Khalifa University and Texas A&M University in Qatar, hoping to achieve a
            great deal of knowledge and get recognition.
          </p>
        </div>
      </main>
    </Page>
  )
}