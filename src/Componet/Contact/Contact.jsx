import React, { useContext } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from "../Auth/AuthProvider";

const Contact = () => {
    const {them}=useContext(AuthContext)
  return (
    <div     className={`${them=='dark'?'text-white':'text-gray-600'} ${them=='dark'?'bg-black':'bg-white'} my-10 p-10 rounded-lg shadow-md` }>
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="flex flex-col md:flex-row items-center justify-around mb-10">
  
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-2xl text-blue-600" />
          <div>
            <h2 className="font-bold text-lg">Our Address</h2>
            <p>Dhaka,bangladesh</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-2xl text-green-600" />
          <div>
            <h2 className="font-bold text-lg">Call Us</h2>
            <p>01305462656</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 ">
          <FaEnvelope className="text-2xl text-red-600" />
          <div>
            <h2 className="font-bold text-lg">Email Us</h2>
            <p>shohidulislamsifat2003@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div  className=" p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 ">Send Us a Message</h2>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 " htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg "
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
