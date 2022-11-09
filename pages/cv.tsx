import Page from '../components/Page'
import MainHeader from '../components/MainHeader'
import NavBar from '../components/NavBar'

type HeadLineProps = {
  name: string
  at: string
  children: string[]
}

const HeadLine = ({name, at, children}: HeadLineProps) => {
  return (
    <div className="w-full">
      <p className="text-2xl font-bold underline">@{at}</p>
      <p className="text-xl font-bold italic">{name}</p>
      <ul className="list-disc list-outside pl-4">
        {children.map(e => (
          <li key={e} className="text-lg">{e}</li>
        ))}
      </ul>
    </div>
  )
}

export default function contact() {
  return (
    <Page className="p-4 space-y-4">
      <MainHeader/>
      <NavBar/>
      <HeadLine at="Technology Community Institute" name="Teacher Assistant">
        {[
          'Help install, configure, & manage Laravel setup for students',
          'Setup communication for students & manage groups',
          'Present summaries and cheatsheets each day',
          'Help solve common errors and bugs',
          'Bring example projects to work on',
          'Review Group Projects',
        ]}
      </HeadLine>
      <HeadLine at="Yemensoft" name="Web Developer + Penetration Tester">
        {[
          'Scan the Ministry of Local Affairs website & fix vulnerabilities [ASP.NET]',
          'Reconfigure old APIs to work with new code [C++]',
          'Develop Whatsapp web service [Typescript & Node.js]',
          'Run services on AWS Infrastructure & ensure 99.99% service reliability',
          'Handle edge-case customers with special needs and requirements',
          'Develop and manage websites using PHP & Laravel Framework',
          'Report interns\' workflow & conduct technical interviews',
          'Research & study new development technologies',
          'Cooperate with R&D team on software design',
        ]}
      </HeadLine>
      <HeadLine at="GitHub" name="Contributor + Project Manager">
        {[
          'Manage testing, deploying, and publishing pipeline',
          'Specify features and backward compatibilities',
          'Document API and version changes',
          'Handle merge-conflicts',
          'Merge pull requests',
          'Do code reviews',
        ]}
      </HeadLine>
      <HeadLine at="Rowad Institute" name="Game Developer">
        {[
          'Cooperate with teammates to create a game using Unity Game Engine with a fixed deadline',
          'Create a user feedback system to respond to issues in the beta releases',
          'Implement analytics insights for balancing and future updates',
          'Experiment with In-App purchases and advertisement',
          'Add support for multiple languages',
          'Scan for bugs and design features',
        ]}
      </HeadLine>
    </Page>
  )
}