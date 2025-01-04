import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Privet = ({children}) => {
    const {loader,user}=useContext(AuthContext)
    const location=useLocation()

    if(user && user?.user?.email){  
      
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(loader){
        
        return <span className="loading loading-spinner loading-lg"></span>
    }
   
if(!user){
    return <Navigate state={location.pathname} to="/login"></Navigate>
}

 return children;

};

export default Privet;