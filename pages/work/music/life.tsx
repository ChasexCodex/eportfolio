import Page from '../../../components/Page'
import NavBar from '../../../components/NavBar'
import MainFooter from '../../../components/MainFooter'
// @ts-ignore
import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'

export default function Life() {
  return (
    <Page>
      <NavBar/>
      <main>
        <Player trackList={[
          {
            url: '/life.mp3',
            title: 'Life',
            tags: ['Instrumental'],
          },
        ]}/>
      </main>
      <MainFooter/>
    </Page>
  )
}