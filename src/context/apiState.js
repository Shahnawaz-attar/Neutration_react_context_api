import ApiContext from "./apiContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


const ApiState = (props) => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('apple');
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const options = {
                method: "GET",
                url : "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
                params: {ingr: search},
                headers: {
                    'X-RapidAPI-Key': 'b6784019f5msh092a9554b9c4710p160528jsn4d1cb45c9454',
                    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
                }
            }
            axios.request(options)
            .then(res => {
                if(res.data.hints[0] !== undefined) {
                    setFoods(res.data.hints);
                    setLoading(false);
                }else{
                    setError('No results found');
                    setLoading(false);
                }

            }
            ).catch(err => {
                setError(err);
                setLoading(false);
            }
            )
            
        
        } catch (err) {
            setError(err);
        }
        };
        fetchData();
    }, [search]);

    const setSeachfield = (search) => {
        setLoading(true);
        setSearch(search);
    }

    
    return (
        <ApiContext.Provider value={{ foods, loading, error ,setSeachfield}}>
        {props.children}
        </ApiContext.Provider>
    );
    }

export default ApiState;