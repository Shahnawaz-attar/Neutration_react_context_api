import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../context/apiContext'
import FoodItems from './FoodItems'

const Food = () => {
    const [food, setFood] = useState([])
    const foodData = useContext(ApiContext)
    const { foods, loading, error } = foodData

    useEffect(() => {
        setFood(foods)
    }, [foods])

    return (
        <div className="container">
            <div className="row">
                {
                    loading ? <h1>Loading...</h1> :
                        error ? <h1>{error}</h1> :
                            food.map((item,i) => 
                            <FoodItems key={i} food={item} />
                            )
                            
                }

            </div>
        </div>

    )
}

export default Food