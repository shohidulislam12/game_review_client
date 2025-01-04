import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { IoIosAddCircle } from "react-icons/io";
import { TbChartBarPopular } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const MoreLike = () => {
  const [games,setGames]=useState([])
  useEffect(()=>{
fetch('https://game-review-server-swart.vercel.app/liked/games')
.then(res=>res.json())
.then(data=>{
 // console.log(data)
  setGames(data)
})
  },[])
   
          return (
            <div className="max-w-6xl mx-auto my-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">More Like This</h2>
               <span className="flex gap-6 items-center"> 
                <NavLink to='/addMore' className="btn btn-ghost">Add More <IoIosAddCircle /></NavLink>
                </span>
              </div>
              <Marquee>
              <div className="grid grid-cols-5 gap-10 sm:grid-cols-5 md:grid-cols-5 gap-4">
                {games.map((game, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <img
                      src={game.cover}
                      alt={game.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {game.title}
                      </h3>
                      <div className="flex justify-between items-center text-sm mt-2">
                        <span className="text-red-500">
                        <span className="text-yellow-500 text-lg">★</span> {game.rating}
                        </span>
                        <span className= "text-yellow-500 flex items-center gap-2">
                        <TbChartBarPopular />{game.popularity}
                        </span>
                      </div>
                      <div>
                      <a 
  href={game.link} 
  target="_blank" 

  className="border border-2 border-gray-500 rounded-xl p-1"
>
  Play now
</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </Marquee>
            </div>
        
    );
};

export default MoreLike;