import Main from './components/main'

import MainPage from './pages/main-page'
import Info from './authPages/info'
import Blog from './authPages/blog'
import Login from './pages/login'
import Signup from './pages/signup'
import Map from './authPages/map'
import ChatBot from './authPages/chatbot'
import ProfileRegistrationPage from './pages/profile-registration-page'
import UserProfile from './pages/user-profile'
import SuccessfulRegistrationPage from './pages/successful-registration-page'


import { Routes, Route } from 'react-router'
import './App.css'


import MainAuthPage from './authPages/main'
import useAuthorizationContext from './context/AuthorizationContext'



function App() {

  const {userAuthorizationResult} = useAuthorizationContext();

  return (
    <div className='wrapper'>
      <Main>
        <Routes>
          <Route path='/' element={userAuthorizationResult ? <MainAuthPage/> : <MainPage/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/chat-bot' element={<ChatBot/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/registration' element={<ProfileRegistrationPage/>}/>
          <Route path='/user-profile' element={<UserProfile/>}/>
          <Route path='/success' element={<SuccessfulRegistrationPage/>}/>
        </Routes>
      </Main>
    </div>
  )
}

export default App
