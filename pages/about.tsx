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
      <main className="flex flex-col mx-4 lg:mx-10 pt-20">
        <div className="flex flex-row">
          <div className="text-2xl lg:w-[60rem] space-y-2">
            <p>
              I am Elyas Al-Amri, a computer professional and music lover,
              although I have been humbly relegated to writing on this website.
              You will see on the home page the genres of work I have done, one of which is English,
              which is probably why you are here. Or you could be an employer at a tech company,
              in which case you may go to my GitHub page for coding showcase.
            </p>
            <p>
              On this website, you will find five of my most credible work in the English writing field:
              research, research presentation, analysis presentation (video), and a narrative essay of my story
              with music. Writing them was pretty challenging, and sometimes I got frustrated, but the reward I
              got on completing them, that lovely feeling of accomplishment, outweighed all my frustration.
            </p>
            <p>
              When I entered this class, I had only written very handful of pieces. I was ill-equipped for the
              writing ahead. Nevertheless, with the help of my instructor, I managed to overcome obstacles along
              the way. I learned to rhetorically analyze visual material, conduct ethnography research, conduct
              research presentations, write scenes and narratives, write drafts, conduct surveys, and interview
              people.
            </p>
            <p>
              When I was told to write research, I was overwhelmed. I never thought I was capable of doing such
              an enormous job. Yet, I stand corrected: It wasn’t easy, and I fought relentlessly to complete it
              and spent hours writing, revising, making graphs, and researching other papers, all of which prove
              I am worthy.
            </p>
            <p>
              Now, I feel capable of writing high-quality research papers (and have applied to join a research
              group!),
              making explanation videos, and doing presentations to an audience. Also, that hesitancy when writing
              something new is now gone, which is fantastic.
            </p>
            <p>
              You may also find some of my work I am proud of in programming and music that deserves to be put out
              there.
            </p>
            <p>
              Feel free to explore the website. Enjoy.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-10">
          <div>
            <p className="text-4xl font-bold pb-4">Biography</p>
            <p className="text-2xl lg:w-[40rem]">
              Elyas Al-Amri is a young yet professional computer programmer.
              He works in all fields: web, mobile, games, desktop, and cloud infrastructure.
              He started as a Minecraft gamer and worked his way to get an internship and a job in Yemen.
              Now, he is freshman at Hamad Bin Khalifa University trying to get his degree and get recognized.
            </p>
          </div>
          <div className="mx-auto relative mt-10 lg:mr-20 w-60 h-60 lg:w-96 lg:h-96">
            <Image src="/images/profile/round.jpg" alt="Profile Image" className="rounded-full ring ring-white" fill/>
          </div>
        </div>
        <div className="py-10">
          <p className="text-4xl pb-4 font-bold">Story</p>
          <p className="lg:w-2/3">
            Elyas Al-Amri is a Yemeni individual. He has loved computers since he could remember. When he was 10, he
            went to Malaysia with his family and stayed there for two years. He grew up learning to speak with people in
            English. He also saw a wide range of technological sophistication, which has defined him as the character he
            is now.
            <br/>
            <br/>
            When he returned to Yemen, he was introduced to the iPad and the internet, and from there, he went forward
            in technology. Over time, he explored every aspect of computers. He experimented with 3D graphics. Then he
            switched to music production. Then he found his ultimate phase: programming. And continued – and still
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