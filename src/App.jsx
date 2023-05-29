import './assets/scss/index.scss'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Home from './pages/Home'
import List from './pages/List'
import Overview from './pages/Overview'
import NewList from './pages/NewList'
import NewEntry from './pages/NewEntry'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app tracking-widest w-full h-fit'>
        <div className='gradient'></div>
        <div className='mx-auto w-full max-w-[1200px] h-full flex flex-col md:flex-row shrink-0 justify-between items-start relative'>
          <SideBar />
          <Main>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/list/:id/'
                element={<List />}
              />
              <Route
                path='/list/new'
                element={<NewList />}
              />
              <Route
                path='/list/:id/entry/new'
                element={<NewEntry />}
              />
              <Route
                path='/overview'
                element={<Overview />}
              />
            </Routes>
          </Main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
