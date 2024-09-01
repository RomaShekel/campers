import { HomePage } from "./Components/HomePage/HomePage.jsx"
import { CatalogPage } from "./Components/CatalogPage/CatalogPage.jsx"
import { CamperPage } from "./Components/CamperPage/CamperPage.jsx"
import { AppBar } from "./Components/AppBar/AppBar.jsx"
import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "./Components/NotFoundPage/NotFoundPage.jsx"
import { useTheme } from "@mui/material"
import { Suspense, useEffect } from "react"
import { Loader } from "./Components/Loader/Loader.jsx"
import { useSelector } from "react-redux"
import { selectLoader } from "./redux/campersList/selectors.js"


function App() {

  const currentTheme = useTheme()

  useEffect(()=> {
    const root = document.documentElement;

    root.style.setProperty('--main-color', currentTheme.palette.primary.main)
    root.style.setProperty('--gray-color', currentTheme.palette.primary.gray)
    root.style.setProperty('--light-gray-color', currentTheme.palette.primary.lightGray)
    root.style.setProperty('--badges-color', currentTheme.palette.primary.badges)
    root.style.setProperty('--stars-color', currentTheme.palette.primary.starts)
    root.style.setProperty('--inputs-color', currentTheme.palette.primary.inputs)
    root.style.setProperty('--white-color', currentTheme.palette.primary.white)
    root.style.setProperty('--text-color', currentTheme.palette.primary.contrastText)
    root.style.setProperty('--button-color', currentTheme.palette.primary.button)
    root.style.setProperty('--button-hover-color', currentTheme.palette.primary.hoverButton)

  }, [currentTheme])

  const isLoader = useSelector(selectLoader)

  return (
    <>
      <AppBar/>
      {isLoader ? <Loader/> : null}
      <Suspense fallback={<Loader/>}> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/catalog/:id' element={<CamperPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </>
  )
}

export default App
