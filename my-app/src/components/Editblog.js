import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Editblog = () => {
  const Navigate = useNavigate()
  const [edit, setEdit] = useState(
    {
      title: "",
      auther: "",
      catogery: "",
      image: "",
      blogbody: "",

    }
  )
  const handleChange = e => {
    const { name, value } = e.target;
    setEdit(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  // const {     title, auther, catogery, image, blogbody}=edit;
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/singleblog/${id}`).then((res) => {

      setEdit(res.data.blog)
    }).catch((err) => {
      alert(err)
      console.log(err)
    })
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:4000/update/${id}`, {
      title: edit.title,
      auther: edit.auther,
      catogery: edit.catogery,
      image: edit.image,
      blogbody: edit.blogbody,
    }).then((res) => {
      alert(res.data.msg)
      Navigate('/allblog')
    }).catch(err => {
      throw new Error(err);
    })
  }

  return (
    <div className='container mt-5'>
      <div className='row mt-2'>
        <div className='col-lg-9 offset-lg-2 col-md-10  jumbotron mt-5'>


          <form>
            <h1>Edit Blog</h1>
            <div className="form-group ">
              <label >Title</label>
              <input type="text" className="form-control" name='title' onChange={handleChange} value={edit.title} placeholder="Enter Title" />

            </div>
            <div className="form-group ">
              <label >Auther</label>
              <input type="text" className="form-control" name='auther' onChange={handleChange} value={edit.auther} placeholder="Enter Auther name" />

            </div>
            <div className="form-group ">
              <label >Contents</label>
              <textarea type="text" name='blogbody' className="form-control" onChange={handleChange} value={edit.blogbody} placeholder="Enter blog contents" />

            </div>
            <div className="form-group ">
              <label >Catogery</label>
              <input type="text" className="form-control" name='catogery' value={edit.catogery} onChange={handleChange} placeholder="Enter Catogery" />

            </div>
            <div className="form-group">
              <label >Image</label>
              <input type="text" required name='image' className="form-control" onChange={handleChange} value={edit.image} placeholder="Edit image url " />
            </div>


            <button type="submit" className="btn btn-primary" onClick={handleUpdate}> Update Blog</button>
          </form>


        </div>
      </div>
    </div>

  )
}

export default Editblog