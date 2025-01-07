import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HeightRate from "./HeightRate";
import Upcoming from "./Upcoming";
import UpcamingGames from "./UpcamingGames";
import MoreLike from "../MoreLike/MoreLike";
import Categori from "../categori/Categori";
import CatagoriGames from "../categori/CatagoriGames";


const Home = () => {
    const review=useLoaderData()


    return (
        <div>
            <Banner></Banner>
            <Categori></Categori>
     
            <HeightRate review={review}></HeightRate>
            
            <Upcoming></Upcoming>
           <MoreLike></MoreLike>
         
           
         
        </div>
    );
};

export default Home;