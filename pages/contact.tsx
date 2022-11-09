import Page from '../components/Page'
import MainHeader from '../components/MainHeader'

export default function contact() {
  return (
    <Page className="py-10">
      <MainHeader/>
      <form action="">
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
      </form>
    </Page>
  )
}