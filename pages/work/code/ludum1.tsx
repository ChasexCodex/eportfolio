import Page from '../../../components/Page'
import NavBar from '../../../components/NavBar'

export default function Ludum1() {
  return (
    <Page>
      <NavBar/>
      <p className="text-center text-3xl lg:text-6xl py-10">
        Nine Circles: A Circles Pathfinding Solution
      </p>
      <p className="mx-auto max-w-[40%]">
        The following video illustrate rhetorical analysis components.
        It talks about how rhetorical triangle components are applied in this ad.
        It also talks about constraints, exigence, and audience.
        The purpose of this video is to show the capability of explaining these concepts to an audience.
        It also demonstrates some capability in video editing.
      </p>
      <div className="mx-auto border-8 my-10 rounded-xl overflow-hidden">
      </div>
    </Page>
  )
}