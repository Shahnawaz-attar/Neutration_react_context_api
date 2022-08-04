import React from 'react'

const Banner = () => {
  return (
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=918&q=80" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1604480132736-44c188fe4d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="d-block w-100" alt="..." />
      </div>
    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
  )
}

export default Banner