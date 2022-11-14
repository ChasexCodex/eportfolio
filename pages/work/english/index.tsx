import Page from '../../../components/Page'
import MainHeader from '../../../components/MainHeader'
import NavBar from '../../../components/NavBar'
import MainFooter from '../../../components/MainFooter'
import Link from 'next/link'

export default function English() {
  return (
    <Page>
      <NavBar/>
      <div className="px-10">
        <p className="text-center text-5xl lg:text-7xl font-extrabold py-2">
          ENGL 104 Projects
        </p>
      </div>

      <div className="grid grid-cols-2 p-10 gap-8">
        <Link href="/work/english/ethnography" className="h-96 bg-gradient-to-b from-purple-900 to-gray-400 block">
          <p className="px-4 pt-4 text-3xl font-semibold">
            Communication Skills of Undergraduates of Texas A&M University in Qatar: A Ethnography Study
          </p>
          <p>

          </p>
        </Link>
        <Link href="/work/english/rhtorical" className="h-96 bg-gradient-to-b from-purple-900 to-gray-400 block">

          <p className="px-4 pt-4 text-3xl font-semibold">
            Visual Rhetorical Analysis of The Foundation for American Security and Freedom{'\''}s <i>The One</i> ad
          </p>
          <p>

          </p>
        </Link>
        <Link href="/work/english/music" className="h-96 bg-gradient-to-b from-purple-900 to-gray-400 block">
          <p className="px-4 pt-4 text-3xl font-semibold">
            My Hands Remembered: My Story With Music
          </p>
          <p>

          </p>
        </Link>
      </div>
      <MainFooter/>
    </Page>
  )
}