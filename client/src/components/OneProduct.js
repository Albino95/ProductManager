import React, { useState} from 'react';
import axios from 'axios'
import { useEffect } from 'react';


const OneProduct = (props) => {

    const [oneProduct, setOneProduct] = useState({})
    const {id} = props;



    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setOneProduct(response.data)
        })
        .catch((err) => {
            console.log(err)

        })
    }, [id])






    return(
        <div>
            OneProduct
        </div>
    )
}

export default OneProduct;