import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">Help & Information</h3>
          <ul className="space-y-2">
            <li className="hover:text-white">
                About Chill Gamer
            </li>
            <li className="hover:text-white">
                Community Guidelines         
            </li>
            <li className="hover:text-white">
                Advertise With Us
            </li>
            <li className="hover:text-white">
                Careers
            </li>
            <li>
                Support

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
          <h3 className="text-white font-bold mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a className="hover:text-white" href="https://www.facebook.com/Iamthedevilofmylife">
            <FaFacebook />
            </a>
            <a className="hover:text-white" href="https://x.com/MDSIFAT1621900">
            <FaTwitter />
            </a>
            <a className="hover:text-white" href="https://www.instagram.com/sifat9951/" >
            <FaInstagram />
            </a>
            <a className="hover:text-white" href="https://www.youtube.com/@shohidulIslam-vl1zn" >
            <FaYoutube />
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
