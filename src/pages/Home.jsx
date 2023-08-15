import '../App.css'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Content from '../components/Content'
import Layout from '../components/Layout'
import BackToUp from '@uiw/react-back-to-top'

export default function Home() {
  return (
    <div className='testx w-100 h-100'>
      <div className='custom_background'></div>
      <div className='custom_app'>
        <Navbar />
        <Layout>
          <Filter />
          <Content />
        </Layout>
      </div>
      <BackToUp>
        ^
      </BackToUp>
    </div>
  )
}
