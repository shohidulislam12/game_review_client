import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const MyreView = () => {
    const {user,setuser,loader,setLoader,them}=useContext(AuthContext)
    const [yourreview,setreview]=useState([])

    useEffect(() => {
        if (user?.email) {
          const fetchUserInfo = async () => {
            try {
             
              const res = await fetch(`https://game-review-server-swart.vercel.app/addreview/${user?.email}`);
              const data = await res.json();
              setreview(data);
            } catch (error) {
              console.error("Error fetching user information:", error);
            } finally {       
            }
          };
         fetchUserInfo();
        }
      }, [user?.email]);   
const handledelete=(id)=>{

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
            fetch(`https://game-review-server-swart.vercel.app/deletreview/${id}`,{
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
                     const remaingEvent=yourreview.filter(e=>e._id!==id)
                     setreview(remaingEvent)
          }
         
        });
    }
    return (
        <div 
        className={`${them=='dark'?'text-white':'text-gray-600'} ${them=='dark'?'bg-black':'bg-white'} min-h-96 my-10` }>
        <h3 className="text-xl font-semibold my-6 text-left">My Review</h3>
        {yourreview==0?<h2 className="text-2xl text-red-600">Opps! You have not any review. <br />plese <span className="text-sm text-green-500 font-bold"><Link  to='/addreview'>Add </Link> </span></h2>:""}
        <div className="flex grid sm:grid-cols-3 grid-cols-1 flex-wrap gap-5">
            {yourreview.map((review) => {
                const { _id, cover, title, review: reviewText, rating } = review;
                return (
                    <div key={_id} className="card relative bg-base-300  p-4">
                        <span onClick={()=>handledelete(_id)} className="absolute top-3 right-4 text-red-500 btn btn-ghost "><MdDeleteForever /></span>
                       
                        <NavLink to={`/update/review/${_id}`} className="text-sm gap-2 btn btn-ghost absolute top-3 right-14 font-semibold flex items-center "><FaEdit /></NavLink>
                        <div className="flex items-center gap-5">
                            <img src={cover} alt={title} className="w-16 h-16 object-cover" />
                            <h2 className="text-left font-bold">{title}</h2>
                        </div>
                        <p className="text-left">{reviewText}</p>
                        <div className="border border-b border-black mt-2"></div>
                        <span className="flex items-center justify-between mt-3">
                            <p>Rated: {rating}/10</p>
                        </span>
                        <NavLink className="text-blue-500" to={`/review/details/${_id}`}  >
                                Full Review
                                </NavLink>
                           
                    </div>
                );
            })}
       
        </div>
       
    </div>
    );
};

export default MyreView;