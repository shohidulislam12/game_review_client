import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";



const AllReview = () => {
    const reviews= useLoaderData()
    const [showreview,setShowreview]=useState([...reviews])

const showHignRate=()=>{
    const maxratedSort= [...showreview].sort((a,b) => parseFloat(b.rating) - parseFloat(a.rating))

    setShowreview(maxratedSort)

}
const handleYEar=()=>{
    const maxyearSort= [...showreview].sort((a,b) => parseFloat(b.year) - parseFloat(a.year))
    setShowreview(maxyearSort)
}
const filterAdvanture=()=>{
    const Adventure= [...showreview].filter(review=>review.genreslist==="Adventure")
    setShowreview(Adventure)
}
const filterRPG=()=>{
    const Adventure= [...showreview].filter(review=>review.genreslist==="RPG")
    setShowreview(Adventure)
}
const filterAction=()=>{
    const Adventure= [...showreview].filter(review=>review.genreslist==="Action")
    setShowreview(Adventure)
}
const filterSimulation=()=>{
    const Adventure= [...showreview].filter(review=>review.genreslist==="Simulation")
    setShowreview(Adventure)
}
const filterShooter=()=>{
    const Adventure= [...showreview].filter(review=>review.genreslist==="Shooter")
    setShowreview(Adventure)
}
    return (
        <div className="min-h-96  my-10">
          <div className="flex justify-between items-center ">
          <h3 className="text-2xl font-semibold  my-6 text-left">Audience Reviews</h3>
            <span className="flex items-center  gap-2 justify-center  "><button  onClick={showHignRate} className=" p-2 btn-outline ">Sort by  Rating</button>
            <button onClick={handleYEar} className=" p-2 btn-outline">Sort By year</button></span>
            <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Filter</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><button onClick={filterAction}>Action</button></li>
    <li><button onClick={filterRPG}>RPG</button></li>
    <li><button onClick={filterAdvanture}>Adventure</button></li>
    <li><button onClick={filterSimulation}>Simulation</button></li>
    <li><button onClick={filterShooter}>Shooter</button></li>
  </ul>
</div>
          </div>
            <div className="flex grid sm:grid-cols-3 grid-cols-1 flex-wrap gap-5">
                {showreview.map((review) => {
                    const { _id,year, cover, title, review: reviewText, rating } = review;
                    return (
                        <div key={_id} className="card bg-base-300  p-4">
                            <div className="flex items-center justify-between">
                            <h2 className="text-left mb-2">Name: {review.username}</h2>
                            <img className="w-10 h-10 rounded-full" src={review.userphoto} alt="" />
                            </div>
                            <div className="flex items-center gap-5">
                                <img src={cover} alt={title} className="w-16 h-16 object-cover" />
                                <h2 className="text-left font-bold">{title}</h2>
                            </div>
                            <p className="text-left">{reviewText}</p>
                            <div className="border border-b border-black mt-2"></div>
                            <span className="flex items-center justify-between mt-3">
                                <p>Rated: {rating}/10</p>
                                <p>Year:{year}</p>
                            </span>
                               
                                <NavLink className="text-blue-500" to={`/review/details/${_id}`}  >
                                Full Review
                                </NavLink>
                               
                        </div>
                    );
                })}
                {
                    !showreview?<h2 className="text-center  text-2xl text-red-500">No data Found</h2>:" "
                }
            </div>
           
        </div>
    );
};

export default AllReview;