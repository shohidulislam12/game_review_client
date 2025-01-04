import { useContext } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const UpdateReview  = () => {
    const reviewData=useLoaderData()
    const  navigate=useNavigate()
    const { _id, cover, title, review, rating, year, genreslist } = reviewData;
 const {user}=useContext(AuthContext)


    const handleadd=(e)=>{
        e.preventDefault()
        const cover=e.target.cover.value
        const title=e.target.title.value
        const review=e.target.review.value
        const rating=e.target.rating.value
       // console.log(user?.displayName)
        const username=user?.displayName
        const useremail=user?.email
        const userphoto=user?.photoURL

        if(parseFloat(rating)>10){
         return alert(' maximum rating shud be 10')
        }
        const year=e.target.year.value
        const genreslist=e.target.genreslist.value
       const newreview={
        cover,title,review,rating,year,genreslist,userphoto,useremail,username
       }
    //   console.log(newreview);
       fetch(`https://game-review-server-swart.vercel.app/revdetails/${_id}`,{
method:'PUT',
body: JSON.stringify(newreview),
  headers: {
    "Content-type": "application/json"
  }
       })
       .then(res=>res.json())
       .then(data=>{
     //   console.log(data);
        if(data.modifiedCount>0){
            navigate(-1)
          return  toast.success('SuccessFully UpdateReview');
        }

       })
    }
    return (
        <div className="border w-full md:w-1/2 border-gray-500 rounded-xl p-2 bg-base-300 my-10 mx-auto">
          <h2 className="text-xl font-semibold">Update Review </h2>
              <form onSubmit={handleadd} id="reviewForm"  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Cover Image</span>
          </label>
          <input defaultValue={cover} name="cover" type="text" placeholder="Cover Image" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Game Title</span>
          </label>
          <input defaultValue={title} name="title" type="text" placeholder="Game Title" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Review Description</span>
          </label>
        
          <textarea defaultValue={review}  rows="4" cols="50" className="border border-b-2 rounded-xl p-3" name="review"  >
</textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input defaultValue={rating} name="rating" type="text" placeholder="add rating (max-10)" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Publishing year</span>
          </label>
          <input className="border border-b-2 rounded-xl p-3" type="number" min="1900" max="2099" step="1" name="year" defaultValue={year} />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <select id="cars" defaultValue={genreslist} name="genreslist" className="border border-b-2 rounded-xl p-3" >
  <option value="volvo">Genres </option>
  <option value="Action">Action</option>
  <option value="RPG">RPG</option>
  <option value="Adventure">Adventure</option>
  <option value="Simulation">Simulation</option>
  <option value="Shooter">Shooter</option>

</select>
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Review</button>
        </div>
      </form>
        </div>
    );
};

export default UpdateReview ;