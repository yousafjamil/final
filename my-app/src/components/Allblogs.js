import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Allblogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/allblog').then((res) => {
      setBlogs(res.data.blogs)
    }).catch((e) => {
      throw Error('some error occured')
    })
  }, [])
  return (
    <div className='container-fluid mt-4'>
      <div className='row'>
        {blogs.map((blog, index) => {
        
          return   <div className='col-lg-4  ' key={index}>

              <div className="card mb-3">
                <img className="card-img-top card-img img-fluid" style={{ height: "400px" }} src={blog.image} alt="Card pic cap" />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.blogbody.substring(0,100)}</p>
                  <Link to={`/singleblog/${blog._id}`}>
                    <button className='btn btn-primary'>Read more...</button>
                  </Link>
                </div>
              </div>
            </div>


        
        })}
      </div>
    </div>
  )
}

export default Allblogs