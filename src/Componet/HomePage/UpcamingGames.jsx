import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaRegSmileBeam } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { MdArrowForward, MdDeleteForever } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const UpcamingGames = ({ them }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://game-review-server-swart.vercel.app/addevent")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => {
       // console.error("Error fetching events:", error);
      });
  }, []);

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = new Date(a.addTime);
    const timeB = new Date(b.addTime);
    return timeB - timeA;
  });

  const handleClose = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-review-server-swart.vercel.app/deletevent/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The event has been deleted.", "success");
              setEvents((prevEvents) => prevEvents.filter((e) => e._id !== id));
            }
          })
          .catch((error) => {
            Swal.fire("Error!", "Failed to delete the event.", "error");
          });
      }
    });
  };

  const textColor = them === "dark" ? "text-white" : "text-gray-600";
  const bgColor = them === "dark" ? "bg-black" : "bg-white";

  return (
    <div className={`font-bold max-h-96 overflow-scroll ${bgColor} ${textColor}`}>
      <h2 className="font-bold text-center mb-9">Upcoming Events & Games</h2>
      {!sortedEvents.length && (
        <h3 className="text-3xl text-red-500 text-center">No Events Found</h3>
      )}
      {sortedEvents.map((event, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-start border p-4 rounded-lg shadow-lg ${bgColor} ${textColor}`}
        >
          <div className="md:w-1/4 w-full mx-auto">
            <img
              src={event.cover}
              alt={event.title || "Event cover"}
              className="rounded-lg"
            />
          </div>

          <div className="w-full md:w-3/4 pl-4">
            <div className="flex flex-col md:flex-row my-5 items-center justify-between mb-2">
              <div className="flex items-center">
                <FaRegSmileBeam className="text-green-500 text-xl mr-2" />
                <span className="ml-2">Release Date: {event?.relisedate}</span>
              </div>
              <div className="flex items-center">
                <GiPodiumWinner className="text-yellow-500 text-xl mr-2" />
                <span className="font-semibold text-lg">Win: {event.price}</span>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-2">Name: {event?.title}</h2>
            <div className="flex items-center mb-4">
              <span className="bg-blue-600 text-white px-2 py-1 rounded">Details</span>
              <Marquee className={`ml-2 rounded-sm p-2 ${bgColor} ${textColor}`}>
                {event.review}
              </Marquee>
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
              <a
                href={event?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm flex items-center"
              >
                <MdArrowForward className="mr-1" />
                Read Document
              </a>
              <NavLink
                to={`/update/event/${event._id}`}
                className="btn btn-outline btn-sm flex items-center"
              >
                Update Event
              </NavLink>
              <button
                onClick={() => handleClose(event._id)}
                className="btn btn-gost btn-sm flex items-center"
              >
                Close Event <MdDeleteForever className="text-red-500 ml-1" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcamingGames;
