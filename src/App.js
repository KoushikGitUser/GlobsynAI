import logo from './logo.svg';
import './globalstyle.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import SignIn from './Screens/Auth/SignIn';
import Navbar from './Components/Navbar';
import ChatScreen from './Screens/ChatScreen';
import LandingPage from './Screens/LandingPage';
import Signup from './Screens/Auth/Signup';
import Update from './Screens/Update';
import Help from './Screens/Help';
import EditProfile from './Screens/EditProfile';
import About from './Screens/About';

function App() {

function PrivateRoute ({children}){
  const user_id = localStorage.getItem("user_id") || sessionStorage.getItem("user_id");

  return user_id !== null && user_id!== undefined && user_id!==""?(
    children
  ):(
    <>
    <Navigate to='/signin' />
    </>
  )

}

const PrivateRouteNames = [
  {
    path:"/editprofile",
    Component:<EditProfile/>
  }
]

const PublicRouteNames = [
  {
    path:"/signin",
    Component:<SignIn/>
  },
  {path:"/",
    Component:<LandingPage/>
  },
  {
    path:"/signup",
    Component:<Signup/>
  },
  {
    path:"/chat",
    Component:<ChatScreen/>
  },
  {
    path:"/update",
    Component:<Update/>
  },
  {
    path:"/help",
    Component:<Help/>
  },
  {
    path:"/about",
    Component:<About/>
  }
  
]


  return (
 <>
 <Router>
  <Routes>
   
    {PublicRouteNames?.map((route,index)=>{
      return(
        <Route key={index} exact path={route.path} element={route.Component} />
      )
    })}

    {PrivateRouteNames?.map((route,index)=>{
      return(
        <Route
        key={index}
        exact 
        path={route.path}
        element={<PrivateRoute>{route.Component} </PrivateRoute>}
        />
      )
    })}
  </Routes>
 </Router>
 
 </>
  );
}

export default App;
