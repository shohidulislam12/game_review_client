import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { CiEdit } from "react-icons/ci";
import { FaEye, FaRegFrown, FaRegSmileBeam } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { MdArrowForward, MdDelete, MdDeleteForever } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const UpcamingGames = () => {
  const [events,setevent]=useState([])
  useEffect(()=>{
fetch("https://game-review-server-swart.vercel.app/addevent")
.then(res=>res.json())
.then(data=>setevent(data))
.catch(error=>{
  
})
  },[])

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = new Date(a.addTime);
    const timeB = new Date(b.addTime);
    return timeB - timeA;
  });

  const handleClose=(id)=>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-review-server-swart.vercel.app/deletevent/${id}`,{
          method:'delete',})
                 .then(res=>res.json())
                 .then(data=>{
             
                  if(data.deletedCount>0){
                    Swal.fire({
                      title: "Closed",
                      text: "Successfully Closed.",
                      icon: "success"
                    });
                  }
                 })
                 const remaingEvent=sortedEvents.filter(e=>e._id!==id)
                 setevent(remaingEvent)
      }
     
    });
  }
    return (
        <div className="font-bold max-h-96 overflow-scroll p-8 bg-[#f4f5f7]">
        <h2 className="font-bold text-center   mb-9">Upcoming Events & Games</h2>
        {
         ( !sortedEvents.length)?<h3 className="text-3xl text-red-500">No Event Fount</h3>:''
        }
        {
        sortedEvents.map((event, index) => (
//new card

<div   key={index}
      className="flex flex-col md:flex-row items-start border p-4 rounded-lg shadow-lg bg-white">
<div className="md:w-1/4 w-3/3 mx-auto">
  <img
   src={event.cover} 
    alt={event.title}
    className="rounded-lg"
  />
</div>

<div className="w-3/4 pl-4">
  <div className="flex flex-col md:flex-row my-5 items-center justify-between mb-2">
    <div className="flex  items-center">
      <FaRegSmileBeam className="text-green-500 text-xl mr-2" />
      <span className="ml-2 text-gray-500">Relise Date:{event?.relisedate}</span>
    </div>
    <div className="flex items-center">
    <GiPodiumWinner className="text-yellow-500 text-xl mr-2" />
      <span className="font-semibold text-lg">Win: {event.price} </span>
    </div>
  </div>

  <h2 className="text-xl font-bold mb-2">Name : {event?.title}</h2>
  <p className="text-gray-600 flex   items-center text-sm mb-4">
 <span className="bg-red-300 p-2 "> Details</span>   <Marquee className="bg-green-400 rounded-sm p-2"> {event.review}</Marquee>
  </p>
  <div className="flex flex-col md:flex-row gap-3  items-center justify-between">
  <a 
  href={event?.link} 
  target="_blank" 
  className="btn btn-outline btn-sm flex items-center"
>
  <MdArrowForward className="mr-1" />
  Read Document
</a>
    <NavLink to={`/update/event/${event._id}`} className="btn btn-outline btn-sm flex items-center"> Update Event</NavLink>
    <button onClick={()=>handleClose(event._id)} className="btn btn-gost  btn-sm">Close Event <MdDeleteForever className="text-red-500"  /></button>
  </div>
</div>
</div>

        ))}
      </div>
    );
};

export default UpcamingGames;