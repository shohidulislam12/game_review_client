import { useContext, useEffect, useState } from "react";
import { FaBookmark, FaEdit } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import { CiBookmark } from "react-icons/ci";


const Details = () => {
    const reviewData=useLoaderData()
    const {user,them}=useContext(AuthContext)
    const [wishreview,setwishreview]=useState([])
   

    const { _id, cover, title,userphoto,useremail, username,review, rating, year, genreslist } = reviewData;
//
useEffect(() => {
  if (user?.email) {
    const fetchUserInfo = async () => {
      try {
       
        const res = await fetch(`https://game-review-server-swart.vercel.app/liked/review/${user?.email}`);
        const data = await res.json();
        setwishreview(data);
      } catch (error) {
      //  console.error("Error fetching user information:", error);
      } finally {       
      }
    };
   fetchUserInfo();
  }
}, [user?.email]); 

// add liked revied 
const likedreview=(reviewData)=>{
  const isAlreadyLiked = wishreview.find((wish) => wish.title === reviewData.title);
  if (isAlreadyLiked) {
    return toast.error("Already added to wishlist");
  }
 const cover=reviewData.cover
 const title=reviewData.title
 const review=reviewData.review
 const rating=reviewData.rating
 const useremail=reviewData.useremail
 const userphoto=reviewData.userphoto
 const year=reviewData.year
 const genreslist=reviewData.genreslist
 const myemail=user.email
 const favovitedata={cover, title,userphoto,useremail, username,review, rating,year, genreslist,myemail }

  fetch('https://game-review-server-swart.vercel.app/liked/review',{
    method:'POST',
    body: JSON.stringify(favovitedata),
      headers: {
        "Content-type": "application/json"
      }
           })
           .then(res=>res.json())
           .then(data=>{
         
          return  toast.success('Review add wishlist')
           })

}
//liked review end
    return (
        <div  
        className={`${them=='dark'?'text-white':'text-gray-600'} ${them=='dark'?'bg-black':'bg-white'}  border shadow-md rounded-lg p-4 flex flex-col md:flex-row md:p-10 p-2 gap-5  my-10  mx-auto` }
      >
         
        <div className="w-1/2 mx-auto">
          <img
            src={cover}
            alt={title}
            className="w-full h-64 rounded-md object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col text-left  justify-between items-center mb-2">
          <div className="flex text-left w-full items-center justify-between">
                           <span className="text-left flex gap-3 items-center justify-between">
                           <img className="w-10 h-10 rounded-full" src={userphoto} alt="" />
                           <h2 className="text-left font-semibold mb-2">Name: {username}</h2>
                          
                           </span>
                           <button onClick={()=>likedreview(reviewData)}  className=" btn btn-ghost"><FaBookmark /></button>
                            </div>
                            <span className="text-left flex">Rivewer Email:{useremail}</span>            
            <h2 className="text-2xl font-bold ">Game Title:{title}</h2>
            
            <div className="flex items-center space-x-4">
            </div>
          </div>
          <p className=" border-t-2 text-left mb-4"> <span className="font-bold">Review: <span className="text-sm ">{review}</span></span>
        
          </p>

          <div className="flex gap-5 justify-between flex-col text-left">
          <p className="border-t-2">Rating: {" "}{rating}</p>
          <p className="border-t-2">Publishing Year:  {" "}{year}</p>
          <p className="border-t-2"> Genres :  {" "}{ genreslist }</p>
         
          </div>
        </div>
      </div>
    );
};

export default Details;