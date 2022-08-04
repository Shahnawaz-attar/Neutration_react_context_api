import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApiContext from '../context/apiContext'

const Getfoodnutration = (props) => {

    const [nutration, setNutration] = useState({
        ENERC_KCAL: 0,
        PROCNT: 0,
        FAT: 0,
        CHOCDF: 0,
        FIBTG: 0
    })
    const [loading, setLoading] = useState(true);
    const [itemImg, setItemImg] = useState('');
    const [fruitTitle, setFruitTitle] = useState('');



    const { id } = useParams()
    const Food = useContext(ApiContext)


    useEffect(() => {
        const { foods } = Food
        const foodByid = foods.find(f => f.food.foodId === id)
        if (foodByid !== undefined) {
            const { food } = foodByid
            const image = JSON.stringify(food.image)
            const title = JSON.stringify(food.label)
            const nutrationValues = JSON.stringify(food.nutrients)
            const nutrationObject = JSON.parse(nutrationValues)
            const img = image =='' ||  'null' ? 'https://via.placeholder.com/150' : JSON.parse(image).small
            setItemImg(img)
            setNutration(nutrationObject)
            setFruitTitle(JSON.parse(title))
            setLoading(false)
        }


    }, [Food, id])




    return (
        <>
        {loading && <div className='text-center mt-2 '> <h3>Loading...</h3></div>}
        {!loading && 
        <div className="container mt-2">
      

            <div className="row">
                <div className="col-lg-4 mx-auto">
                    <div className="card">
                        <img className="card-img-top" src={itemImg} alt="Card image cap" />

                    </div>
                </div>

                <div className="col-lg-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Nutrition Facts</h5>
                            <h6 className="card-text">{fruitTitle}</h6>
                                <ul className="list-group">
                                    <li className="list-group-item">Calories: {nutration.ENERC_KCAL}</li>
                                    <li className="list-group-item">Protein: {nutration.PROCNT}</li>
                                    <li className="list-group-item">Fat: {nutration.FAT}</li>
                                    <li className="list-group-item">Carbohydrates: {nutration.CHOCDF}</li>
                                    <li className="list-group-item">Fiber: {nutration.FIBTG}</li>
                                </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        }
        </>
    )
}

export default Getfoodnutration