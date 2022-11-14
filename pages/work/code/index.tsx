import Page from '../../../components/Page'
import NavBar from '../../../components/NavBar'
import MainFooter from '../../../components/MainFooter'
import Link from 'next/link'

export default function Code() {
  return (
    <Page>
      <NavBar/>
      <div className="px-10">
        <p className="text-center text-5xl lg:text-7xl font-extrabold py-2">
          Into the Code
        </p>
      </div>
      <div className="grid grid-cols-1 px-10 lg:w-2/3 mx-auto gap-8 py-10">
        <Link href="/work/code/circles"
              className="px-4 h-96 bg-gradient-to-b from-yellow-400 to-gray-600 block rounded-r-2xl shadow-sm shadow-white">
          <p className="py-4 text-2xl lg:text-3xl font-semibold">
            Nine Circles: A Circles Pathfinding Solution
          </p>
          <p className="lg:w-80">
            Created in C# and C++ with Unity Engine in 52 days, the Nine Circles Project is a pathfinder algorithm
            (Dijkstra and AStar implementation).
          </p>
        </Link>
        {/*<Link href="/work/code/ludum1" className="px-4 h-96 bg-gradient-to-b from-orange-700 to-gray-600 block rounded-r-2xl shadow-sm shadow-white">*/}
        {/*  <p className="py-4 text-2xl lg:text-3xl font-semibold">*/}
        {/*    Ludum Dare 42 Entry: Battlefield King*/}
        {/*  </p>*/}
        {/*  <p className="lg:w-80">*/}
        {/*    My first game and entry to Ludum Dare Game Jam.*/}
        {/*  </p>*/}
        {/*</Link>*/}
      </div>
      <MainFooter/>
    </Page>
  )
}