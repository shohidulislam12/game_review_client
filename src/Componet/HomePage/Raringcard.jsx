import { AiFillStar } from "react-icons/ai"; // Star Icon
import { FaTag } from "react-icons/fa"; // Tag Icon
import { NavLink } from "react-router-dom";
const Raringcard = ({rev}) => {
    const {cover,title,rating,genreslist,_id}=rev
    const handleDetails=(id)=>{
  // console.log(id)
    }
    return (
        <div className="max-w-xs h-[450px] card animate__animated  border   shadow-lg animate__flipInX flex animate__repeat-2	2 animate__slower	3s flex-col justify-between mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="h-48">
      <img
            className="w-full h-48 object-cover"
            src={cover}
                 alt={title}
          />
      </div>
          <div className="text-left">
  
            <p className="text-black font-semibold text-sm mt-2">
            Name: {title}
            </p>
            <div className="">
              <p className="text-sm  text-gray-800">Genres:{genreslist}</p>
              <p>{}</p>
              <div className="flex  items-center mt-2">
                <p className="text-sm "><span className="text-yellow-400 text-lg">★</span>: {rating} / 10</p>
                
                
              </div>
            </div>
          </div>
       
          <NavLink to={`/review/details/${_id}`}  className="w-full bg-blue-600 text-white py-2 font-bold hover:bg-blue-700">Explore Details</NavLink>
        </div>
    );
};

export default Raringcard;