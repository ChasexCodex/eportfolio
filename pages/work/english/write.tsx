import NavBar from '../../../components/NavBar'
import {Viewer, Worker} from '@react-pdf-viewer/core'
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import Page from '../../../components/Page'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function Write() {
  return (
    <Page>
      <NavBar/>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
        <div className="h-screen">
          <Viewer
            fileUrl="/files/write.pdf"
            plugins={[
              defaultLayoutPlugin(),
            ]}
          />
        </div>
      </Worker>
    </Page>
  )
}