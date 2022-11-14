import Page from '../../../components/Page'
import NavBar from '../../../components/NavBar'
import YouTube from 'react-youtube'

export default function Circles() {
  return (
    <Page>
      <NavBar/>
      <p className="text-center text-3xl lg:text-6xl py-10">
        Nine Circles: A Circles Pathfinding Solution
      </p>
      <p className="mx-auto px-10 lg:max-w-[40%]">
        52 days to make a pathfinder algorithm for a maze of circles using two languages and a game engine. I have officially mastered programing.
      </p>
      <div className="mx-auto border-8 my-10 rounded-xl overflow-hidden">
        <YouTube videoId="GN7l6QU4Trc" className="aspect-[16/9]" opts={{width: 320, height: 180}}/>
      </div>
    </Page>
  )
}