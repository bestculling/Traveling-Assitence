import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Content from './components/Content'
import Layout from './components/Layout'

function App() {
  return (
    <div className='h-100 bg-body-secondary overflow-auto'>
      <Navbar />
      <Layout>
        <Filter />
        <Content />
      </Layout>
    </div>
  )
}

export default App
