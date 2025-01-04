
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const UpdateEvent= () => {
    const  navigate=useNavigate()
    const eventInfu=useLoaderData()
    const {review,_id,title,cover,price,link,relisedate}=eventInfu
   // console.log("event infu",eventInfu)
    const  addTime = new Date();
   // console.log(addTime);
       const handleadd=(e)=>{
           e.preventDefault()
           const link=e.target.link.value
           const cover=e.target.cover.value
           const title=e.target.title.value
           const price=e.target.price.value
           const review=e.target.review.value
           const relisedate=e.target.relisedate.value

          const eventInfu={
           cover,title,review,relisedate,addTime,link,price
          }
         // console.log(eventInfu);
          fetch(`https://game-review-server-swart.vercel.app/addevent/${_id}`,{
            method:'PUT',
            body: JSON.stringify(eventInfu),
              headers: {
                "Content-type": "application/json"
              }
                   })
                   .then(res=>res.json())
                   .then(data=>{
               //     console.log(data);
                    if(data.modifiedCount>0){
                        navigate(-1)
                      return  toast.success("Update Event success");
                     
                    }
            
                   })
       }
       return (
        <div className="md:w-1/2 border border-gray-500 rounded-xl p-2 bg-base-300 mx-auto">
            <h2 className="text-xl font-bold text-center">Update Event Information </h2>
              <form onSubmit={handleadd} id="eventForm"  className="card-body">
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
            <span className="label-text">Documantation</span>
          </label>
          <input defaultValue={link} name="link" type="text" placeholder="Documantation Link" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Game Price</span>
          </label>
          <input defaultValue={price} name="price" type="text" placeholder="Game Price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Description</span>
          </label>
        
          <textarea rows="4" cols="50" className="border border-b-2 rounded-xl p-3" name="review" defaultValue={review} >
</textarea>
        </div>
   
        <div className="form-control">
          <label className="label">
            <span className="label-text">Release Date</span>
          </label>
          <input defaultValue={relisedate} type="date" id="relisedate" name="relisedate"/>
         
        </div>



        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Event</button>
        </div>
      </form>
        </div>
    );
};

export default UpdateEvent;