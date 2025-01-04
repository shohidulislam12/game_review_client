import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Fade } from "react-awesome-reveal";
import { MdDelete } from "react-icons/md";

const Watchlist = () => {
    const {user,}=useContext(AuthContext)
    const [wishreview,setwishreview]=useState([])

    useEffect(() => {
        if (user?.email) {
          const fetchUserInfo = async () => {
            try {
             
              const res = await fetch(`https://game-review-server-swart.vercel.app/liked/review/${user?.email}`);
              const data = await res.json();
              setwishreview(data);
            } catch (error) {
              console.error("Error fetching user information:", error);
            } finally {       
            }
          };
         fetchUserInfo();
        }
      }, [user?.email]);   
      const handledelete=(id)=>{

      }
    return (
        <div className="overflow-x-auto">
     
        <h2>All  Wish List: {wishreview.length}</h2>
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>Serial No</th>
                    <th>Profile</th>
                    <th>Title</th>
                    <th>Genreslist</th>
                    <th>Rating</th>
                    <th>Year</th>
                    
                </tr>
            </thead>
            <tbody>
                {wishreview.map((data, ind) => (
                    // Ensure you return the JSX inside `.map()`
                    <tr key={data._id}>
                        <th>{ind + 1}</th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img src={data.userphoto} alt={data.username} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{data.username}</div>
                                    <div className="text-sm opacity-50">{data.useremail}</div>
                                </div>
                            </div>
                        </td>
                        <td>{data.title}</td>
                        <td>{data.genreslist}</td>
                        <td>{data.rating}</td>
                        <td>{data.year}</td>
                      
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};


export default Watchlist;