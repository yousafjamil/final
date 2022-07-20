import axios from 'axios';
import React,{useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom';

const Signup = () => {
    
    const [signup,setSignup]=useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })
    const Navigate=useNavigate()
    // 
    const handleChange =( e) => {
        const { name, value } = e.target;
        setSignup(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    // handle signup  functionality
    const  handleSignup=async(e)=>{
        try {
            e.preventDefault();
            const res = await axios.post('http://localhost:4000/signup',{
                name:signup.name,
                email:signup.email,
                phone:signup.phone,
                password:signup.password
            } )
           
                let token=JSON.stringify(res.data.token)
                localStorage.setItem('token',token)
               
                alert(res.data.message)
              
           // Navigate({ pathname: '/allblog' })
    
          if(res.data.success===false){
                return alert(res.data.message)
            }
             Navigate('/allblog') 
          
           
        } catch (error) {
            return alert(error)
        }

    }    
  
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-lg-8 offset-lg-2 form py-4' >


            <form onSubmit={handleSignup}  >
<h1>Singup</h1>
            <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control" value={signup.name}  onChange={handleChange} name='name' required  placeholder="Enter name" />
    
  </div>
  <div className="form-group">
    <label >Email address</label> 
    <input type="email" className="form-control" value={signup.email} onChange={handleChange} name='email' required  placeholder="Enter email" />
    
  </div>
  <div className="form-group">
    <label >Phone</label>
    <input type="number" className="form-control" value={signup.phone} onChange={handleChange}  name='phone' required placeholder="Enter name" />
    
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" value={signup.password} onChange={handleChange} name='password' required placeholder="Password" />
  </div>
  
  <button type="submit" className="btn btn-primary mb-4">Signup</button>   <br/>

{localStorage.getItem('token')? '':<>
OR
<p>if You have an account Login</p>
<Link to='/login'>
<button type="submit" className="btn btn-primary">Login</button>

</Link>
</>   }

</form>

            </div>
        </div>
    </div>
  )
}

export default Signup