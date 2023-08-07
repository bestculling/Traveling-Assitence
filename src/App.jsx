import { Route, Routes } from "react-router-dom"
import { useState } from 'react'
import { filterContext } from './context/filterContext'
import { useData } from './hooks/useData'
import Home from './pages/Home'
import About from "./pages/About"

export default function App() {
  const data = useData()
  const [provinceState, setProvinceState] = useState(data)
  return (
    <filterContext.Provider value={{ provinceState, setProvinceState }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<About />} />
      </Routes>
    </filterContext.Provider>
  )
}