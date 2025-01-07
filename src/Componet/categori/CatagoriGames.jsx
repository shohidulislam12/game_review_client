import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar, FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";

const CatagoriGames = () => {
  const { genreslist } = useParams(); // Get the genre from URL
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(genreslist)
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/addreview/${genreslist}`
        );
        setGames(data); // Assuming the response contains a 
      } catch (error) {
        console.error("Error fetching category games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [genreslist]);

  if (loading) {
    return <div className="text-center text-lg my-10">Loading...</div>;
  }
  console.log(games)
  return (
    <div className="my-10">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
    {genreslist} Games
  </h2>
    <p className="text-center text-gray-600 mb-10">
      Explore top-rated {genreslist.toLowerCase()} games and find your next adventure!
    </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {games.length > 0 ? (
          games.map((game, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
          
              <img
                src={game.cover || "https://via.placeholder.com/150"}
                alt={game.title}
                className="w-full h-40 object-cover"
              />

  
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {game.title}
                </h4>
                <div className="flex items-center justify-between mt-2">
                
                  <div className="flex items-center text-yellow-500">
                    <FaStar className="mr-1" />
                    <span>{game.rating}</span>
                  </div>
          
                  <button className="btn btn-sm btn-primary flex items-center">
                 {game.year}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No games found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CatagoriGames;
