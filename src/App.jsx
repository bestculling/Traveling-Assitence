import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Content from './components/Content'
import Layout from './components/Layout'
import { filterContext } from './context/filterContext'
import { central } from './data/central'
import { east } from './data/east'
import { north } from './data/north'
import { south } from './data/south'
import { west } from './data/west'
import { useState } from 'react'
import BackToUp from '@uiw/react-back-to-top';
import { Triangle } from 'react-loader-spinner'


export const initialState = [
  ...central,
  ...east,
  ...west,
  ...north,
  ...south
]

function App() {
  const [provinceState, setProvinceState] = useState(initialState)
  return (
    <filterContext.Provider value={{ provinceState, setProvinceState }}>
      <div className='bg-body-secondary overflow-auto'>
        <Navbar />
        <Layout>
          <Filter />
          <Content />
        </Layout>
      </div>
      <BackToUp>
        ^
      </BackToUp>
    </filterContext.Provider>
  )
}

export default App
