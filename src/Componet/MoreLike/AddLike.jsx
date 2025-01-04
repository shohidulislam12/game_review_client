import { useContext } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const AddLike = () => {
    const navgate=useNavigate()
    const {user}=useContext(AuthContext)
  //  console.log("user infu",user)
    const  addTime = new Date();
  //  console.log(addTime);
       const handleaddGames=(e)=>{
           e.preventDefault()
           const cover=e.target.cover.value
           const title=e.target.title.value
           const link=e.target.link.value
       
           const rating=e.target.rating.value
           const popularity=e.target.popularity.value
         
   
           if (!cover || !title || !link || !rating || !popularity) {
            return alert('All fields are required');
          }
           if(parseFloat(rating)>10){
            return alert(' maximum rating shud be 10')
           }
           if(parseFloat(popularity)>100){
            return alert(' maximum populiraty shud be 100')
           }
          const eventInfu={
           cover,title,link,rating,popularity
          }
          //console.log(eventInfu);
          fetch('https://game-review-server-swart.vercel.app/liked/games',{
   method:'POST',
   body: JSON.stringify(eventInfu),
     headers: {
       "Content-type": "application/json"
     }
          })
          .then(res=>res.json())
          .then(data=>{
         //  console.log(data);
           const form = document.getElementById('eventForm');
           
         form.reset(); 
         navgate('/')
         return toast.success('add games success ')
   
          })
       }
       return (
        <div className="md:w-1/2 border border-gray-500 rounded-xl p-2 bg-base-300 my-10 mx-auto">
          <h2 className="text-xl text-center  font-semibold">Add Popular Games</h2>
              <form onSubmit={handleaddGames} id="eventForm"  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cover Image</span>
          </label>
          <input name="cover" type="text" placeholder="Cover Image" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Game Title</span>
          </label>
          <input name="title" type="text" placeholder="Game Title" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Play Now</span>
          </label>
          <input  name="link" type="text" placeholder="Documantation Link" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input name="rating" type="text" placeholder="Game rating max-10" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Popularity</span>
          </label>
          <input name="popularity" type="text" placeholder="Game popularity %" className="input input-bordered" />
        </div>
   




        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Games</button>
        </div>
      </form>
        </div>
    );
};

export default AddLike;