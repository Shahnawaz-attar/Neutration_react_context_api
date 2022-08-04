import React from 'react'
import {
  Link
} from "react-router-dom";

const FoodItems = (props) => {
  const  { food } = props
  let { label, image, url ,category ,foodId,foodContentsLabel} = food.food
  url =  url ? url : '/'
  label = label || 'No Label'
  image = image || 'https://via.placeholder.com/150'
  category = category || 'No Category'
  foodId = foodId || 'No Id'
  foodContentsLabel = foodContentsLabel || 'No Food Contents Label'

 
  
  return (
    <div className="col-lg-4 ">
      <div className="card" >
        <img className="card-img-top" src={image} alt="Card image cap" />
          <p className="m-2 badge bg-primary ">{category}</p>
        <div className="card-body"> <h5 className="card-title">{label}</h5>
          <p className="card-text">{foodContentsLabel}</p>
          <Link to={`/getfoodnutration/${foodId}`} className="btn btn-primary">Get Nutrients</Link>
        </div>
      </div>

    </div>
  )
}

export default FoodItems