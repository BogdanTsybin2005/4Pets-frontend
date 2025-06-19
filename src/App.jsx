import './App.css'
import { Routes, Route } from 'react-router'

import Main from './components/main'
 
import { lazy, Suspense } from 'react'

const MainPage = lazy(() => import('./pages/main-page'))
const Info = lazy(() => import('./authPages/info'))
const Blog = lazy(() => import('./authPages/blog'))
const Login = lazy(() => import('./pages/login'))
const Signup = lazy(() => import('./pages/signup'))
const Map = lazy(() => import('./authPages/map'))
const ChatBot = lazy(() => import('./authPages/chatbot'))
const ProfileRegistrationPage = lazy(() => import('./pages/profile-registration-page'))
const UserProfile = lazy(() => import('./pages/user-profile'))
const SuccessfulRegistrationPage = lazy(() => import('./pages/successful-registration-page'))
 
import MainAuthPage from './authPages/main'
import useAuthorizationContext from './context/AuthorizationContext'
 
 
 
 function App() {
   const { userAuthorizationResult, isLoading } = useAuthorizationContext();
   if (isLoading) return <div className="loading-screen">
     <h1 className="loading-screen__title">Загрузка...</h1>
   </div>;
   return (
     <div className='wrapper'>
       <Main>
        <Suspense fallback={<div className="loading-screen"><h1 className="loading-screen__title">Загрузка...</h1></div>}>
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
        </Suspense>
       </Main>
     </div>
   );
 }
 
 export default App;
