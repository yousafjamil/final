import axios from 'axios';
import React, { useState } from 'react'

const Searchblogs = () => {
    const [query, setQuery] = useState('');
    const [store, setStore] = useState('');
    // const [msg,setMessage]=useState(false)
    const handleSearch = (e) => {
        e.preventDefault()
        axios.get(`http://localhost:4000/search/${query}`).then(res => {
            setStore(res.data.blog)
            setQuery('')

        }).catch((err) => {
            alert(err)
        })
    }

    // useEffect( ()=>{
    //     handleSearch()
    // },[query])

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 offset-2'>
                    <form method='get'  >
                        <div className="form-group d-flex">
                            <input type="text" required name='catogery' className="form-control" onChange={(e) => setQuery(e.target.value)} value={query} placeholder="search blog by catogery" />
                            <button type="submit" onClick={handleSearch} className="btn btn-primary">Search</button>

                        </div>
                    </form>
                </div>
            </div>
            {/* 2nd row for display  search food */}

            <div className='row'>
                {/* {msg ? 'No  such  blog is found':'your search blog is found'} */}
                {store && <>
                    {store.map((item, index) => {
                        return <div className='col-lg-6' key={index}>

                            <div className="card mb-3">
                                <img className="card-img-top card-img img-fluid" style={{ height: "300px" }} src={item.image} alt="Card pic cap" />
                                <div className="card-body">
                                    <h3 className="card-title">catogery :{item.title}</h3>
                                    <h5 className="card-title">auther :{item.auther}</h5>
                                    <p className="card-text">{item.blogbody}</p>


                                </div>
                            </div>

                        </div>
                    })}


                </>}
            </div>
        </div>
    )
}

export default Searchblogs