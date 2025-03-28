import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'

import OurTeam from './pages/our-team'
import MainPage from './pages/main-page'
import Info from './pages/info'
import Blog from './pages/blog'
import Login from './pages/login'
import Signup from './pages/signup'

import { Routes, Route } from 'react-router'
import './App.css'



function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Main>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/our-team' element={<OurTeam/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Main>
      <Footer/>
    </div>
  )
}

export default App
