import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const {signIn,googleLogin}=useContext(AuthContext)
    const navigate=useNavigate()
    const navigate2=useNavigate()
    const handlelogin=(e)=>{
        e.preventDefault()
       
        const email=e.target.email.value
        const password=e.target.password.value
      
        signIn(email,password)
        .then((result) => {
        
           navigate(location?.state?location.state:"/")
           return  toast.success("succesfully login ")
          })
          .catch((error) => {
           const  errorMessage = error.message;
           return toast.error(errorMessage)
          });
    }
    const handlegoogle=()=>{
        googleLogin()
  .then((result) => {
 // 

 const name=result.user.displayName
 const email=result.user.email
 const image=result.user.photoURL
 const  userinfu ={name,email,image}
 navigate2(location?.state?location.state:"/")
 toast.success("succesfuly login ")
  //sent database 
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
           //end login database 

navigate(location?.state?location.state:"/")

  }).catch((error) => {
    const errorMessage = error.message;
   return  toast.error(errorMessage)
    

  });

    }
    return (
       
        <div className="w-full md:w-1/2 mx-auto">
 <form onSubmit={handlelogin} className="card-body">

<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" name="email" placeholder="email" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input name="password" type="password" placeholder="password" className="input input-bordered" required />
<label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
</div>
<div className="form-control mt-6">
<button className="btn btn-primary">Login </button>

</div>
</form>
<p>If you are Not rejistar plese <Link to='/rejistar' className="text-red-500 ">Registar </Link></p> <span>or</span>
<div onClick={handlegoogle} className="flex items-center btn btn-ghost gap-5 justify-center ">
    <p>Login With </p> <img className="w-10  h-10" src="https://i.postimg.cc/MHzqDBdL/google.png" alt="" />
</div>

</div>

);
};

export default Login;