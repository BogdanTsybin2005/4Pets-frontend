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
  const { userAuthorizationResult, isLoading } = useAuthorizationContext();
  if (isLoading) return <div className="loading-screen">Загрузка...</div>;
  return (
    <div className='wrapper'>
      <Main>
        <Routes>
          <Route path='/' element={userAuthorizationResult ? <MainAuthPage/> : <MainPage/>}/>
          <Route path='/blog' element={userAuthorizationResult ? <Blog/> : <MainPage/>}/>
          <Route path='/info' element={userAuthorizationResult ? <Info/> : <MainPage/>}/>
          <Route path='/chat-bot' element={userAuthorizationResult ? <ChatBot/> : <MainPage/>}/>
          <Route path='/map' element={userAuthorizationResult ? <Map/> : <MainPage/>}/>
          <Route path='/login' element={userAuthorizationResult ? <MainAuthPage/> : <Login/>}/>
          <Route path='/signup' element={userAuthorizationResult ? <MainAuthPage/> : <Signup/>}/>
          <Route path='/registration' element={userAuthorizationResult ? <MainAuthPage/> : <ProfileRegistrationPage/>}/>
          <Route path='/user-profile' element={userAuthorizationResult ? <MainAuthPage/> : <UserProfile/>}/>
          <Route path='/success' element={userAuthorizationResult ? <MainAuthPage/> : <SuccessfulRegistrationPage/>}/>
        </Routes>
      </Main>
    </div>
  );
}

export default App
