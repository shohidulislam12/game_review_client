import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const AddReview = () => {
  const navigate = useNavigate();
  const { user, them } = useContext(AuthContext);

  // State for user information
  const [userinf, setUserinf] = useState({});

  useEffect(() => {
    if (user?.email) {
      const fetchUserInfo = async () => {
        try {
          const res = await fetch(`https://game-review-server-swart.vercel.app/adduser/${user?.email}`);
          const data = await res.json();
          setUserinf(data);
        } catch (error) {
          console.error("Error fetching user information:", error);
        }
      };
      fetchUserInfo();
    }
  }, [user?.email]);

  const handleAdd = (e) => {
    e.preventDefault();

    const cover = e.target.cover.value;
    const title = e.target.title.value;
    const review = e.target.review.value;
    const rating = e.target.rating.value;
    const username = userinf?.name;
    const userphoto = userinf?.image;
    const useremail = user?.email;

    if (parseFloat(rating) > 10) {
      return toast.error("Maximum rating should be 10");
    }

    const year = e.target.year.value;
    const genreslist = e.target.genreslist.value;
    const newReview = {
      cover,
      title,
      review,
      rating,
      year,
      genreslist,
      userphoto,
      useremail,
      username,
    };

    fetch("https://game-review-server-swart.vercel.app/addreview", {
      method: "POST",
      body: JSON.stringify(newReview),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        const form = document.getElementById("reviewForm");
        form.reset();
        return toast.success("Successfully Added Review");
      });
  };

  const textColor = them === "dark" ? "text-white" : "text-gray-600";
  const bgColor = them === "dark" ? "bg-black" : "bg-white";

  return (
    <div className={`border w-full md:w-1/2 border-gray-500 rounded-xl p-2 my-10 mx-auto ${bgColor} ${textColor}`}>
      <form onSubmit={handleAdd} id="reviewForm" className="card-body">
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${textColor}`}>Cover Image</span>
          </label>
          <input name="cover" type="text" placeholder="Cover Image" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${textColor}`}>Game Title</span>
          </label>
          <input name="title" type="text" placeholder="Game Title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${textColor}`}>Review Description</span>
          </label>
          <textarea
            rows="4"
            cols="50"
            className={`border border-b-2 rounded-xl p-3 ${bgColor} ${textColor}`}
            name="review"
            defaultValue="Enter text here..."
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${textColor}`}>Rating</span>
          </label>
          <input name="rating" type="text" placeholder="Add rating (max-10)" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${textColor}`}>Publishing Year</span>
          </label>
          <input
            className={`border border-b-2 rounded-xl p-3 ${bgColor} ${textColor}`}
            type="number"
            min="1900"
            max="2099"
            step="1"
            name="year"
            defaultValue="2016"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className={`label-text ${textColor}`}>Genres</span>
          </label>
          <select
            id="genreslist"
            name="genreslist"
            className={`border border-b-2 rounded-xl p-3 ${bgColor} ${textColor}`}
          >
            <option value="volvo">Select Genre</option>
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
