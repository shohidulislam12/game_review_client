import React, { useContext } from "react";
import { FaGamepad, FaMagic, FaPuzzlePiece, FaRunning, FaVrCardboard } from "react-icons/fa";
import { AuthContext } from "../Auth/AuthProvider";
import { NavLink } from "react-router-dom";
import { GiHydraShot } from "react-icons/gi";

const Categori = () => {
    const {them}=useContext(AuthContext)
  const categories = [
    { name: "Action", icon: <FaRunning className="text-4xl text-blue-500" /> },
    { name: "Adventure", icon: <FaMagic className="text-4xl text-purple-500" /> },
    { name: "Shooter", icon: <GiHydraShot className="text-4xl text-yellow-500" /> },
    { name: "RPG", icon: <FaVrCardboard className="text-4xl text-green-500" /> },
    { name: "Simulation", icon: <FaGamepad className="text-4xl text-red-500" /> },
  ];

  return (
    <div 
    className={`${them=='dark'?'text-white':'text-gray-600'} ${them=='dark'?'bg-black':'bg-white'}  my-10` } 
>
      <h2 className="text-3xl font-bold text-center mb-6">Explore Categories</h2>
      <p className="text-center mb-10">
        Discover games from various categories tailored to your preferences.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <NavLink to={`/category/${category.name}`}
            key={index}
            className="flex flex-col items-center  p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
  
            {category.icon}

            <h3 className="text-lg font-semibold mt-4">{category.name}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categori;
