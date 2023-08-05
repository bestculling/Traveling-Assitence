import '../App.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Content from '../components/Content'
import Layout from '../components/Layout'
import BackToUp from '@uiw/react-back-to-top'

export default function Home() {
  return (
    <div style={{ background: "#121212" }} className='overflow-auto'>
      <Navbar />
      <Layout>
        <Filter />
        <Content />
      </Layout>
      <BackToUp>
        ^
      </BackToUp>
    </div>
  )
}
