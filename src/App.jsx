import Main from './components/main'

import MainPage from './pages/main-page'
import Info from './pages/info'
import Blog from './pages/blog'
import Login from './pages/login'
import Signup from './pages/signup'
import Map from './pages/map'
import ChatBot from './pages/chatbot'
import Subscription from './pages/subcription'
import ProfileRegistrationPage from './pages/profile-registration-page'
import UserProfile from './pages/user-profile'
import SuccessfulRegistrationPage from './pages/successful-registration-page'


import { Routes, Route } from 'react-router'
import './App.css'



function App() {
  return (
    <div className='wrapper'>
      <Main>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/chat-bot' element={<ChatBot/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/subscription' element={<Subscription/>}/>
          <Route path='/registration' element={<ProfileRegistrationPage/>}/>
          <Route path='/user-profile' element={<UserProfile/>}/>
          <Route path='/success' element={<SuccessfulRegistrationPage/>}/>
        </Routes>
      </Main>
    </div>
  )
}

export default App
