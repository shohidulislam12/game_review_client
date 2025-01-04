import { IoIosAddCircle } from "react-icons/io";
import UpcamingGames from "./UpcamingGames";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Upcoming = () => {
    return ( 
        <div>
                    <div style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
          }}>
           <div className="flex flex-col md:flex-row  justify-between items-center">
           <div>
      <h1>
        <span className="text-xl font-semibold ">Let'win </span>{' '}
        <span className="text-xl font-semibold " style={{ color: 'green' }}>
          <Typewriter
            words={['Coming Events', ' Coming Tournaments ', ' Coming Compitition ']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
           <h2 className="text-3xl font-semibold my-10">Upcoming Events or Tournaments </h2>
           <NavLink to="/addEvent" className="btn btn-ghost ">Add Event <IoIosAddCircle /></NavLink>
           </div>
            <p  className="animate__animated animate__zoomInDown flex  animate__slower	2s " style={{ marginBottom: "20px" }}>
            Keep an eye on the countdown timer and mark your calendars so you don't miss out on the action. Join us to showcase your skills, meet new friends, and celebrate the love of gaming together!
            </p>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}>
            </div>
          </div>
          <UpcamingGames></UpcamingGames>
        </div>
    );
};

export default Upcoming;