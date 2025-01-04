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
  const {signOutUser,user,setuser,loader,setLoader}=useContext(AuthContext)
const [userinf,setuserinf]=useState({})


const handleTheme = () => {
  const newTheme =theme=== "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};
useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);


useEffect(() => {
  if (user?.email) {
    const fetchUserInfo = async () => {
      try {
       
        const res = await fetch(`https://game-review-server-swart.vercel.app/adduser/${user?.email}`);
        const data = await res.json();
        setuserinf(data);
      } catch (error) {
        console.error("Error fetching user information:", error);
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
    <li><NavLink to='/addreview'>Add Review </NavLink></li>
    <li><NavLink to='/myreview'>My Reviews</NavLink></li>
    <li><NavLink to='/watchList'>Game WatchList</NavLink></li>
    <li> <input type="checkbox" onChange={handleTheme} checked={theme === "dark"} value="synthwave" className="toggle theme-controller" /></li>
              </>
    return (
   <div>
         <div className="navbar bg-base-100">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     {
         navlist
     }
      </ul>
    </div>
    <a className="rancho text-3xl">ChillGamer</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {
    navlist
   }
    </ul>
  </div>
  <div className="navbar-end">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            hi,
            <span className="badge">{userinf?.name}</span>
          </a>
        </li>
        <li><a onClick={logout}>Log Out</a></li>
      </ul>
    </div>
    :  <NavLink to='/login' className="btn"> Login <  FaUserCircle className="text-3xl" /> </NavLink>
  }

  </div>
</div>
<ToastContainer
         position="top-center" />
<Outlet></Outlet>
<Footer></Footer>
   </div>
    );
};

export default Navbar;