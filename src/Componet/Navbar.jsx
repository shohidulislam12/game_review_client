import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth/AuthProvider";
import { auth } from "../firebase.init";
import { FaUserCircle } from "react-icons/fa";
import Footer from "./HomePage/Footer";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const navigate=useNavigate()
  const {signOutUser,user,setuser,loader,setLoader,setThem}=useContext(AuthContext)
const [userinf,setuserinf]=useState({})


const handleTheme = () => {
  const newTheme =theme=== "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
 
};
useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  setThem(theme)
}, [theme]);


useEffect(() => {
  if (user?.email) {
    const fetchUserInfo = async () => {
      try {
       
        const res = await fetch(`https://game-review-server-swart.vercel.app/adduser/${user?.email}`);
        const data = await res.json();
        setuserinf(data);
      } catch (error) {
     
      } finally {       
      }
    };
   fetchUserInfo();
  }
}, [user?.email]);

  const logout=()=>{
    signOutUser()
    .then(() => {
      setuser(null)
      navigate('/')
     return   toast.success('logout sucsess')
 
    }).catch((error) => {

    });
  }
    const  navlist=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allreview'>All Reviews</NavLink></li>
{  user&&  <li><NavLink to='/addreview'>Add Review </NavLink></li>}
{  user&&  <li><NavLink to='/myreview'>My Reviews</NavLink></li>}
{  user&&  <li><NavLink to='/watchList'>Game WatchList</NavLink></li>}
<li><NavLink to='/about'>About Us</NavLink></li>
<li><NavLink to='/contact'>Contact </NavLink></li>
    <li> <input type="checkbox" onChange={handleTheme} checked={theme === "dark"} value="synthwave" className="toggle  theme-controller" /></li>
              </>
    return (
   <div>
         <div className="navbar px-8 text-white max-w-screen-lg mb-10 fixed mx-auto left-0 right-0 top-0 z-50 bg-blue-600">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 bg-blue-600 shadow">
     {
         navlist
     }
      </ul>
    </div>
    <a className="rancho gap-2 flex items-center justify-center rounded-xl text-3xl">
  <img
    src="https://i.ibb.co/B4tJVYT/Dark-Illustrative-The-Mafia-Gaming-Logo.png"
    className="w-10 h-10 rounded-full"
    alt="ChillGamer Logo"
  />
  ChillGamer
</a> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu  menu-horizontal px-1">
   {
    navlist
   }
    </ul>
  </div>
  <div className="justify-end">
  {
    user? 
    // <div className="flex flex-col items-center">
    //   <  FaUserCircle className="text-3xl" />
    //   <h2>name</h2>
    //   <button onClick={logout} className="btn">Log Out  </button> 
    // </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn flex  btn-ghost btn-circle avatar">
      
        <div className="w-10 rounded-full">
          
          <img
            alt="Tailwind CSS Navbar component"
            src={userinf?.image} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-blue-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            hi,
            <span className="badge">{userinf?.name}</span>
          </a>
        </li>
        <li><a onClick={logout}>Log Out</a></li>
      </ul>
    </div>
    :  <NavLink to='/login' className="btn btn-primary"> Login <  FaUserCircle className="text-3xl" /> </NavLink>
  }

  </div>
</div>
<ToastContainer
         position="top-center" />
<div className="max-w-screen-lg mx-auto">
<Outlet></Outlet>
</div>
<Footer></Footer>
   </div>
    );
};

export default Navbar;