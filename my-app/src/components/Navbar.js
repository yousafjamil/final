import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <div className='navbar-container'>


    <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
      <Link className="navbar-brand text-white" to="/">Bloging Website</Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {!localStorage.getItem('token')? '':<>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto py-3">
          <li className="nav-item active ">
            <Link className='nav-link ' data-toggle="collapse" data-target="#navbarSupportedContent"  to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item ">
            <Link  className='nav-link ' data-toggle="collapse" data-target="#navbarSupportedContent"  to="/allblog">All Blogs</Link>
          </li>
          <li className="nav-item ">
            <Link  className='nav-link  ' data-toggle="collapse" data-target="#navbarSupportedContent"  to="/addblog">Add Blog</Link>
          </li>
          

        </ul>

      </div>
</>   }
     
    </nav>





  </div>;
}

export default Navbar