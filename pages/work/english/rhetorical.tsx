import Page from '../../../components/Page'
import NavBar from '../../../components/NavBar'
import YouTube from 'react-youtube'

export default function Rhetorical() {
  return (
    <Page>
      <NavBar/>
      <p className="text-center text-6xl py-10">
        Visual Rhetorical Analysis of The Foundation for American Security and Freedom{'\''}s <i>The One</i> ad
      </p>
      <p className="w-[40rem] mx-auto">
        The following video illustrate rhetorical analysis components.
        It talks about how rhetorical triangle components are applied in this ad.
        It also talks about constraints, exigence, and audience.
        The purpose of this video is to show the capability of explaining these concepts to an audience.
        It also demonstrates some capability in video editing.
      </p>
      <div className="mx-auto border-8 my-10 rounded-xl overflow-hidden">
        <YouTube videoId="CmOAvdjFWL8"/>
      </div>
    </Page>
  )
}