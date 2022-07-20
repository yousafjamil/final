import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const Navigate=useNavigate();
    const [login,setLogin]=useState({ email:"", password:"" })


    const handleChange =( e) => {
        const { name, value } = e.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
// handle login function
const  handleLogin=async(e)=>{
    try {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/login',{  email:login.email, password:login.password
        } );

        if(res.data.success===false){
            return alert(res.data.message)
        }else{
            Navigate('/allblog')
        }
      

    } catch (error) {
        alert(error)
    }
}
  return (
    <div className='container mt-5'>
    <div className='row'>
        <div className='col-lg-8 offset-lg-2 form' >
        <form  className='py-3' onSubmit={handleLogin}>
<h1>Login</h1>
 
<div className="form-group">
<label >Email address</label> 
<input type="email" className="form-control py-1" value={login.email} onChange={handleChange} name='email' required  placeholder="Enter email" />

</div>

<div className="form-group">
<label>Password</label>
<input type="password" className="form-control py-1" value={login.password} onChange={handleChange} name='password' required placeholder="Password" />
</div>

<button type="submit" className="btn btn-info">Login</button>
</form>

        </div>
    </div>
</div>
  )
}

export default Login