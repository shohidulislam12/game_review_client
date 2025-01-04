import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const AddReview = () => {
  const navigate=useNavigate()
 const {user}=useContext(AuthContext)
 // for user 
 const [userinf,setuserinf]=useState({})


useEffect(() => {
  if (user?.email) {
    const fetchUserInfo = async () => {
      try {
       
        const res = await fetch(`https://game-review-server-swart.vercel.app/adduser/${user?.email}`);
        const data = await res.json();
        setuserinf(data);
      } catch (error) {
        console.error("Error fetching user information:", error);
      } finally {       
      }
    };
   fetchUserInfo();
  }
}, [user?.email]);

// for user
 // console.log("user infu",user)

    const handleadd=(e)=>{
        e.preventDefault()
        const cover=e.target.cover.value
        const title=e.target.title.value
        const review=e.target.review.value
        const rating=e.target.rating.value
     //   console.log(user?.displayName)
     const username=userinf?.name
     const userphoto=userinf?.image
        const useremail=user?.email
  

        if(parseFloat(rating)>10){
         return  toast.error('maximum rating shud be 10')
        }
        const year=e.target.year.value
        const genreslist=e.target.genreslist.value
       const newreview={
        cover,title,review,rating,year,genreslist,userphoto,useremail,username
       }
     //  console.log(newreview);
       fetch('https://game-review-server-swart.vercel.app/addreview',{
method:'POST',
body: JSON.stringify(newreview),
  headers: {
    "Content-type": "application/json"
  }
       })
       .then(res=>res.json())
       .then(data=>{
      //  console.log(data);
      
        navigate('/')
        const form = document.getElementById('reviewForm');
      form.reset(); 
      return  toast.success('SuccessFully Add Review')
       })
    }
    return (
        <div className="border w-full md:w-1/2 border-gray-500 rounded-xl p-2 bg-base-300 my-10 mx-auto">
           <div>
 
       
      </div>
              <form onSubmit={handleadd} id="reviewForm"  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cover Image</span>
          </label>
          <input name="cover" type="text" placeholder="Cover Image" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Game Title</span>
          </label>
          <input name="title" type="text" placeholder="Game Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review Description</span>
          </label>
        
          <textarea rows="4" cols="50" className="border border-b-2 rounded-xl p-3" name="review" defaultValue='Enter text here...' required >
</textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input name="rating" type="text" placeholder="add rating (max-10)" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Publishing year</span>
          </label>
          <input className="border border-b-2 rounded-xl p-3" type="number" min="1900" max="2099" step="1" name="year"  defaultValue="2016" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <select id="cars" name="genreslist" className="border border-b-2 rounded-xl p-3" >
  <option value="volvo">Genres </option>
  <option value="Action">Action</option>
  <option value="RPG">RPG</option>
  <option value="Adventure">Adventure</option>
  <option value="Simulation">Simulation</option>
  <option value="Shooter">Shooter</option>

</select>
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Review</button>
        </div>
      </form>
        </div>
    );
};

export default AddReview;