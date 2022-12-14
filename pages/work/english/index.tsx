import Page from '../../../components/Page'
import NavBar from '../../../components/NavBar'
import MainFooter from '../../../components/MainFooter'
import Link from 'next/link'

export default function English() {
  return (
    <Page>
      <NavBar/>
      <div className="px-10">
        <p className="text-center text-5xl lg:text-7xl font-extrabold py-2">
          ENGL104 Projects
        </p>
      </div>
      <div className="grid grid-cols-1 px-10 lg:w-2/3 mx-auto gap-8 py-10">
        <Link href="/work/english/ethnography" className="px-4 h-96 bg-gradient-to-b from-purple-900 to-gray-600 block rounded-r-2xl shadow-sm shadow-white">
          <p className="py-4 text-2xl lg:text-4xl font-semibold">
            Communication Skills of Undergraduates of Texas A&M University in Qatar: An Ethnography Study
          </p>
          <p className="lg:w-80">
            A Research was conducted at Texas A&M university for my ENGL104 Final Project with the aim of finding how students
            perceive their communication skills being improved during university.
          </p>
        </Link>
        <Link href="/work/english/rhetorical" className="px-4 h-96 bg-gradient-to-b from-amber-700 to-gray-600 block rounded-r-2xl shadow-sm shadow-white">
          <p className="py-4 text-2xl lg:text-4xl font-semibold">
            Visual Rhetorical Analysis of The Foundation for American Security and Freedom{'\''}s <i>The One</i> ad
          </p>
          <p className="lg:w-80">
            Rhetorical analysis of a political ad about the Iran Nuclear Deal.
            It explains the ethos, pathos, logos, and additional terms.
          </p>
        </Link>
        <Link href="/work/english/music" className="px-4 h-96 bg-gradient-to-b from-green-600 to-gray-600 block rounded-r-2xl shadow-sm shadow-white">
          <p className="py-4 text-2xl lg:text-4xl font-semibold">
            My Hands Remembered: My Story With Music
          </p>
          <p className="lg:w-80">
            The story of how I went from playing simple notes on a toy keyboard to playing classical pieces on a grand piano.
          </p>
        </Link>
        <Link href="/work/english/presentation" className="px-4 h-96 bg-gradient-to-b from-pink-600 to-gray-600 block rounded-r-2xl shadow-sm shadow-white">
          <p className="py-4 text-2xl lg:text-4xl font-semibold">
            Professional Presentation of Ethnography Research
          </p>
          <p className="lg:w-80">
            This is the revised version of my Research In Progress (now Research Completed) presentation. It highlights the results of Project 4 and is what I would make when presenting.
          </p>
        </Link>
        <Link href="/work/english/write" className="px-4 h-96 bg-gradient-to-b from-cyan-600 to-gray-600 block rounded-r-2xl shadow-sm shadow-white">
          <p className="py-4 text-2xl lg:text-4xl font-semibold">
            Writing: Solace of Life
          </p>
          <p className="lg:w-96">
            <i>Well, look at that. I know how to write poetry. Thanks for the insights, Shakespeare.</i>
            <p>One of my very handful pieces in poetry: Why We Write.</p>
          </p>
        </Link>
      </div>
      <MainFooter/>
    </Page>
  )
}