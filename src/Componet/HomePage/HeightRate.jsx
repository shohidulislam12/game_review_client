import { useState } from "react";
import Raringcard from "./raringcard";
import { Fade } from "react-awesome-reveal";

const HeightRate = ({review}) => {
  


   const maxratedSort= review.sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))
  

    return (
        <div>
           <Fade>
           <h2 className="text-2xl font-semibold text-center my-10 ">Highest Rated Game Section</h2>
            <p className="text-gray-600 mt-2 w-3/4 mx-auto">
          Explore the top-rated games, curated just for you. These games have received high praise for their exceptional quality, immersive gameplay, and outstanding ratings from players worldwide.
        </p>
</Fade>
           <div className="grid grid-cols-1  card animate__animated animate__zoomIn animate__repeat-2	2 rounded-lg shadow-lg 	infinite md:grid-cols-3 lg:grid-cols-4 gap-3 ">
           {
             maxratedSort.slice(0,8).map(rev=><Raringcard key={rev._id} rev={rev}></Raringcard>)
            }
           </div>
  
        </div>
    );
};

export default HeightRate;