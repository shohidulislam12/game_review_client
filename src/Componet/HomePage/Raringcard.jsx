import { AiFillStar } from "react-icons/ai"; // Star Icon
import { FaTag } from "react-icons/fa"; // Tag Icon
import { NavLink } from "react-router-dom";
const Raringcard = ({rev}) => {
    const {cover,title,rating,genreslist,_id}=rev
    const handleDetails=(id)=>{
  // console.log(id)
    }
    return (
        <div className="max-w-xs h-[400px] card animate__animated  border   shadow-lg animate__flipInX flex animate__repeat-2	2 animate__slower	3s flex-col justify-between mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
          <img
            className="w-full h-48 object-cover"
            src={cover}
                 alt={title}
          />
          <div className="p-4">
  
            <p className="text-gray-600 text-sm mt-2">
            Name: {title}
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-800">Genres:{genreslist}</p>
              <div className="flex  items-center mt-2">
                <p className="text-sm ">Rating: {rating} / 10</p>
                <span className="text-yellow-400 text-lg">★★★★</span>
                <span className="text-gray-400 text-lg">★</span>
              </div>
            </div>
          </div>
       
          <NavLink to={`/review/details/${_id}`}  className="w-full bg-blue-600 text-white py-2 font-bold hover:bg-blue-700">Explore Details</NavLink>
        </div>
    );
};

export default Raringcard;