import React, { useContext } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Footer = () => {
  const {them}=useContext(AuthContext)
  return (
    <footer 
    className={`${them=='dark'?'text-white':'text-gray-600'} ${them=='dark'?'bg-black':'bg-gray-900'}  max-w-screen-lg 
    mx-auto  py-10 ` } >
    
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">Help & Information</h3>
          <ul className="space-y-2">
            <li className="hover:text-white">
               <NavLink to='/allreview'> About Chill Gamer</NavLink>
            </li>
            <li className="hover:text-white">
                 
                <NavLink >  Community Guidelines  </NavLink>    
            </li>
            <li className="hover:text-white">
            <a className="hover:text-white" target="_blank" href="https://www.linkedin.com/in/mdsifat1621900/" >
            Advertise With Us
            </a>
                
            </li>
            
          
            <li>
            <a className="hover:text-white" target="_blank" href="https://www.linkedin.com/in/mdsifat1621900/" >
            Support
            </a>
              

            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Join the Chill Gamer Newsletter</h3>
          <p className="mb-4">
            Get exclusive updates, early access to reviews, and special discounts delivered right to your inbox!
          </p>
          <Link to="/login" className="btn btn-primary">Sign Up for Free</Link>
        </div>
        <div className="flex flex-col items-center">
        <a className="rancho flex text-white items-center justify-center rounded-xl text-3xl">
  <img
    src="https://i.ibb.co/B4tJVYT/Dark-Illustrative-The-Mafia-Gaming-Logo.png"
    className="w-20 h-20 rounded-full"
    alt="ChillGamer Logo"
  />
  ChillGamer
</a>
          <h3 className="text-white font-bold mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a target="_blank" className="hover:text-white" href="https://www.facebook.com/Iamthedevilofmylife">
            <FaFacebook />
            </a>
            <a target="_blank" className="hover:text-white" href="https://x.com/MDSIFAT1621900">
            <FaTwitter />
            </a>
            <a target="_blank" className="hover:text-white" href="https://www.instagram.com/sifat9951/" >
            <FaInstagram />
            </a>
            <a target="_blank" className="hover:text-white" href="https://www.youtube.com/@shohidulIslam-vl1zn" >
            <FaYoutube />
            </a>
            <a target="_blank" className="hover:text-white" href="https://www.linkedin.com/in/mdsifat1621900/" >
            <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">
          <a href="#" className="hover:text-white">
            Privacy Policy |
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service |
          </a>
          <a href="#" className="hover:text-white">
            Cookie Policy |
          </a>
          <a href="#" className="hover:text-white">
            Accessibility 
          </a>
        </p>
        <p className="text-sm mt-4">
          © Chill Gamer, 2024. All Rights Reserved. Level up your gaming experience.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
