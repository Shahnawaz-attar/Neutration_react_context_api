import React, { useContext, useState } from 'react'
import ApiContext from '../context/apiContext'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {
    // current path 
    const location = useLocation();
    // current path name
    const { pathname } = location;
    // get getfoodnutration/food_a1gb9ubb72c7snbuxr3weagwv0dd
    const foodId = pathname.split('/')[2]

  
  const [search, setSearchfun] = useState('')
  const foodSeach = useContext(ApiContext)
  const { setSeachfield } = foodSeach


  const handleChange = (e) => {
    setSearchfun(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSeachfield(search)
    

  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Health Care</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Link</Link>
            </li>


          </ul>
      { !foodId&&<form className="d-flex">
            <input className="form-control " type="search" placeholder="Search Fruits" aria-label="Search" name="search" onChange={handleChange} value={search} />&nbsp;
            <button className="btn btn-outline-light" type="submit" onClick={handleSubmit}> Search </button>
          </form>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar

