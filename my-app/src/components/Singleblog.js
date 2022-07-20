import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Singleblog = () => {
  const [sblog, setBlog] = useState('')
  const { id } = useParams()

  const navigate = useNavigate()

  // handle delelte post 
  const handleDelete = (_id) => {
    axios.delete(`http://localhost:4000/deleteblog/${_id}`).then(res => {
      alert('you blog  successfully deleted.')
      navigate('/')
    }).catch(err => {
      //  throw new Error(err)
      navigate('/')
    })
  }
  // handle edit 

  const handlefechData = () => {
    axios.get(`http://localhost:4000/singleblog/${id}`).then((res) => {
      setBlog(res.data.blog)
    }).catch((err) => {
      throw new Error(err)
    })
  }
  useEffect(() => {
    handlefechData()
  }, [])

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-12'>
          {!sblog ? 'No item here' : <>

            <div className="card mb-3">
              <img className="card-img-top card-img img-fluid" style={{ height: "500px" }} src={sblog.image} alt="Card pic cap" />
              <div className="card-body">
                <h3 className="card-title">Title : {sblog.title}</h3>
                <h5 className="card-title">auther :{sblog.auther}</h5>
                <h5 className="card-title">Catogery :{sblog.catogery}</h5>
                <p className="card-text">{sblog.blogbody}</p>

                <Link to={`/`}>
                  <button className='btn btn-primary'>Go back</button>
                </Link>

                <button className=' ml-2 btn btn-danger' onClick={() => handleDelete(sblog._id)}>Delete post</button>

                <Link to={`/editblog/${sblog._id}`}>
                  <button className=' ml-2 btn btn-info' >Edit post</button>
                </Link>
              </div>
            </div>




          </>}

        </div>
      </div>
    </div>
  )
}

export default Singleblog