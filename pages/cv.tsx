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

const Cert = ({children}: { children: string[] }) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2">
      {children.map(e => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  )
}

export default function CV() {
  return (
    <Page>
      <div className="fixed inset-0" style={{
        backgroundImage: `url(/images/bg.jpg)`,
        backgroundSize: 'cover',
        zIndex: -1,
      }}/>
      <NavBar/>
      <MainHeader/>
      <main className="px-4 py-10 space-y-4">
        <div>
          <p className="text-5xl font-bold pb-2">Work Experience:</p>
          <div className="space-y-4 mx-auto">
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
          </div>
        </div>
        <div>
          <p className="text-5xl font-bold pt-6 pb-2">Certifications:</p>
          <p className="italic underline text-xl">Company Cerificates:</p>
          <ul>
            <li>Yemensoft Internship Cert.</li>
            <li>Web Development with Laravel Cert.</li>
            <li>Turing Developer Cert.</li>
          </ul>
        </div>
        <div>
          <p className="italic underline text-xl">LinkedIn Learning Certificates:</p>
          <Cert>
            {[
              'AWS Essential Training for Developers',
              'Advanced Express',
              'Advanced npm',
              'Advanced Laravel',
              'Advanced Node.js',
              'AWS Essential Training for Developers',
              'Become a Node.js Developer',
              'Become a Vue.js Developer',
              'Building RESTful APIs with Node.js and Express',
              'Building a Video Chat App with Vue.js 2 and Firebase',
              'Become a C# Developer',
              'Become a Laravel Developer',
              'Become a React Developer',
              'Building Laravel and Vue.js Web Apps',
              'Building Modern Projects with React',
              'Building RESTful APIs in Laravel',
              'Building Vue and Node Apps with Authentication',
              'C# Algorithms',
              'C# Essential Training 1: Types and Control Flow',
              'C# Essential Training 2: Generics, Collections, and LINQ',
              'C++ Advanced Topics',
              'Code Clinic: C#',
              'Databases for Node.js Developers',
              'Extending Laravel with First-Party Packages',
              'Express Essential Training',
              'Git Essential Training',
              'Git: Branches, Merges, and Remotes',
              'Javascript Essential Training',
              'Laravel 5 Essential Training',
              'Laravel 6 Essential Training: Testing, Securing, and Deploying Apps',
              'Laravel 9 Essential Training',
              'Learning C++',
              'Learning Next.js',
              'Learning Node.js',
              'Learning Vue.js',
              'Learning Vuex',
              'Learning npm the Node Package Manager',
              'Python Essential Training',
              'Node.js: Microservices',
              'Node.js: Testing and Code Quality',
              'Node: Authentication',
              'Nail Your C# Developer Interview',
              'Node.js Essential Training',
              'React Hooks',
              'React Essential Training',
              'React.js: Building an Interface',
              'React: Authentication',
              'React: Creating and Hosting a Full-Stack Site',
              'React Design Patterns',
              'React: Software Architecture',
              'Typescript Essential Training',
              'Vue.js 2 Essential Training',
              'Vue.js: Building an Interface',
              'Vue.js: Full-Stack Applications with Firebase',
            ]}
          </Cert>
        </div>
        <div>
          <p className="text-5xl font-bold pb-2">Education:</p>
          <p>Hamad Bin Khalifa University + Texas A&M (Qatar) | Bachelor (2022 - Date)</p>
          <p>Al-Rasheed Modern Schools (Yemen) | High School (2017 - 2020)</p>
        </div>
      </main>
    </Page>
  )
}