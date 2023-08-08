import './App.css';
import {BrowserRouter, Link, Route, Routes, createBrowserRouter, useLocation} from 'react-router-dom'
import Home from './Home/Home';
import Users from './Home/Users';
import Settings from './Home/Settings';
import UserDetails from './Home/UserDetails';
import UsersLayout from './components/UsersLayout';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path:'/',
  }
])


function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <nav className='navigation'>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/settings">Settings</Link>
        <button onClick={()=>{setIsLogin((login)=>!login)}}>Sign</button>
      </nav>
      
      <Routes>
        {isLogin 
        ?
        :
      }
        <Route index element={<Home/>}/>
        <Route  path='users'element={<UsersLayout/> }>
          <Route index 
          element= {<Users/>}
          />
          <Route path = "details"element= {<UserDetails/>}/>
          <Route path = "create"element= {<Temp/>}/>
          <Route path = "edit"element= {<Temp/>}/>
        </Route>
        <Route path='settings' element={<Settings/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


const Temp = ()=>{
  const location = useLocation();
  return location.pathname;
}