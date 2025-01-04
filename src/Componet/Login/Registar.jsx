import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const Registar = () => {
  const location = useLocation();
  const {userRegistar}=useContext(AuthContext)
const  navigate=useNavigate()
const checkPassword=(password)=>{
  const re = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  return re.test(password);
}

    const handlerejistar=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        if(!name){
          return toast.error("plese write name ")
        }
        const email=e.target.email.value
        if(!email){
          return toast.error("plese write email ")
        }
        const password=e.target.password.value
        if(!password){
          return toast.error("plese set strong password ")
        }
  const validpass=checkPassword(password)
  if(validpass){

  }
else {
    return toast.error("enter valid password")
  }
        const image=e.target.image.value
        if(!image){
          return toast.error("plese provide image url")
        }
        const userinfu={name,email,password,image}
        userRegistar(email, password)
        .then((user) => {
       //  console.log(user)
         //sent data backend 
         fetch('https://game-review-server-swart.vercel.app/adduser',{
          method:'POST',
          body: JSON.stringify(userinfu),
            headers: {
              "Content-type": "application/json"
            }
                 })
                 .then(res=>res.json())
                 .then(data=>{
               //   console.log(data);
            
          
                 })
                 navigate(location?.state?location.state:"/")
         return toast.success('SuccessFully Rejistar')
        })
        .catch((error) => {
          const errorCode = error.code;
          return toast.error(errorCode)
        });
  
    }
    return (
       
                    <div className="w-full md:w-1/2 mx-auto">
             <form onSubmit={handlerejistar} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="image" placeholder="Image (direct link)" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered"  />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registar</button>

        </div>
      </form>
      <p>If you are already rejistar plese <Link to='/login' className="text-green-500 ">Login</Link></p>
        </div>
       
    );
};

export default Registar;