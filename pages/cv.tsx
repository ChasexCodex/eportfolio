import Page from '../components/Page'
import MainHeader from '../components/MainHeader'
import NavBar from '../components/NavBar'
import {Viewer, Worker} from '@react-pdf-viewer/core'
import {themePlugin} from '@react-pdf-viewer/theme'

// type HeadLineProps = {
//   name: string
//   at: string
//   children: string[]
// }

// const HeadLine = ({name, at, children}: HeadLineProps) => {
//   return (
//     <div className="w-full">
//       <p className="text-2xl font-bold underline">@{at}</p>
//       <p className="text-xl font-bold italic">{name}</p>
//       <ul className="list-disc list-outside pl-4">
//         {children.map(e => (
//           <li key={e} className="text-lg">{e}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// const Cert = ({children}: { children: string[] }) => {
//   return (
//     <ul className="grid grid-cols-1 lg:grid-cols-2 list-disc list-outside pl-4">
//       {children.map(e => (
//         <li key={e}>{e}</li>
//       ))}
//     </ul>
//   )
// }

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Image from 'next/image'

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
      <div className="relative w-60 h-60 lg:w-96 lg:h-96 mx-auto my-10">
        <Image src="/images/profile/round.jpg" alt="Profile Image" className="rounded-full ring ring-white" fill/>
      </div>
      <main className="lg:px-40">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <div className="h-screen my-10 rounded-xl overflow-clip">
            <Viewer theme="auto" fileUrl="/files/cv.pdf"
                    plugins={[
                      themePlugin(),
                    ]}
            />
          </div>
        </Worker>
      </main>
    </Page>
  )
}