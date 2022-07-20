import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Addblog = () => {

  const Navigate=useNavigate()
  const [response,setResponse]=useState('')
  const [input,setInput]=useState({
    title:"",
    auther:"",
    catogery:"",
    image:"",
    blogbody:""
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(prevState => ({
        ...prevState,
        [name]: value
    }));
};
  const  handleSubmit=(e)=>{
    e.preventDefault();
    if(input.title  ===""|| 
    input.auther === "" ||
    input.catogery ==="" ||
    input.image===""||
    input.blogbody===""){
      return alert('please fill all the fields.')
    }
    axios.post('http://localhost:4000/createblog',{
      title:input.title,
      auther:input.auther,
      catogery:input.catogery,
      image:input.image,
      blogbody:input.blogbody
    }).then(res=>{
      alert(res.data.msg)
      setResponse(res.data)
      setInput(
        {
          title:"",
          auther:"",
          catogery:"",
          image:"",
          blogbody:""
        }
      )
      Navigate('/allblog')
    }).catch((e)=>{
      alert(e) 
    }
          
      )
  }
  return (
    <div className='container mt-5'>
        <div className='row mt-2'>
            <div className='col-lg-9 offset-lg-2 col-md-10  jumbotron mt-2'>


            <form onSubmit={handleSubmit} method='post'  >
                <h1>Add Blog</h1>
                {response? response.msg:''}
  <div className="form-group ">
    <label >Title</label>
    <input type="text" required name='title' className="form-control"  onChange={handleChange } value={input.title}  placeholder="Enter Title" />
   
  </div>
  <div className="form-group ">
    <label >Auther</label>
    <input type="text" required name='auther' className="form-control" onChange={handleChange } value={input.auther}   placeholder="Enter Auther name" />
   
  </div>
  <div className="form-group ">
    <label >Contents</label>
    <textarea type="text" required name='blogbody' className="form-control" onChange={handleChange } value={input.blogbody}   placeholder="Enter blog contents" />
   
  </div>
  <div className="form-group ">
    <label >Catogery</label>
    <input type="text" required name='catogery' className="form-control" onChange={handleChange } value={input.catogery}  placeholder="Enter Catogery" />
   
  </div>
  <div className="form-group">
    <label >Image</label>
    <input type="text"  required name='image' className="form-control" onChange={handleChange } value={input.image}  placeholder="image url " />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>


            </div>
        </div>
    </div>
  )
}

export default Addblog