import './assets/scss/index.scss'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Home from './pages/Home'
import Overview from './pages/Overview'
import NewList from './pages/NewList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div className='app tracking-widest w-full h-fit'>
        <div className='mx-auto w-full max-w-[1200px] h-full flex flex-col md:flex-row shrink-0 justify-between items-start relative'>
          <SideBar />
          <Main>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/list/new'
                element={<NewList />}
              />
              <Route
                path='/overview'
                element={<Overview />}
              />
            </Routes>
          </Main>
        </div>
      </div>
    </>
  )
}
