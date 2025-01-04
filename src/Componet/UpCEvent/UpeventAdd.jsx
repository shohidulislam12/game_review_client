import { useContext } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const UpeventAdd = () => {
    const navgate=useNavigate()
    const {user}=useContext(AuthContext)
   // console.log("user infu",user)
    const  addTime = new Date();
  //  console.log(addTime);
       const handleadd=(e)=>{
           e.preventDefault()
           const cover=e.target.cover.value
           const title=e.target.title.value
           const link=e.target.link.value
           const review=e.target.review.value
           const price=e.target.price.value
           const relisedate=e.target.relisedate.value

          const eventInfu={
           cover,title,review,relisedate,addTime,price,link
          }
      //    console.log(eventInfu);
          fetch('https://game-review-server-swart.vercel.app/addevent',{
   method:'POST',
   body: JSON.stringify(eventInfu),
     headers: {
       "Content-type": "application/json"
     }
          })
          .then(res=>res.json())
          .then(data=>{
        //   console.log(data);
           const form = document.getElementById('eventForm');
           
         form.reset(); 
         navgate('/')
         return toast.success('evvent add sucessfully')
   
          })
       }
       return (
        <div className="md:w-1/2 border border-gray-500 rounded-xl p-2 bg-base-300 my-10 mx-auto">
          <h2 className="text-xl text-center  font-semibold">Add Event</h2>
              <form onSubmit={handleadd} id="eventForm"  className="card-body">
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
            <span className="label-text">Documantation</span>
          </label>
          <input  name="link" type="text" placeholder="Documantation Link" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Game Price</span>
          </label>
          <input name="price" type="text" placeholder="Game Price" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text"> Description</span>
          </label>
        
          <textarea rows="4" cols="50" className="border border-b-2 rounded-xl p-3" name="review" defaultValue='description about your event....' >
</textarea>
        </div>
   
        <div className="form-control">
          <label className="label">
            <span className="label-text">Release Date</span>
          </label>
          <input type="date" id="relisedate" name="relisedate"/>
         
        </div>



        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Event</button>
        </div>
      </form>
        </div>
    );
};

export default UpeventAdd;