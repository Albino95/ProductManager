import React, {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';



const AllProducts = (props) => {

    const [productList, setProductList] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/products')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setProductList(response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])




    return(
        <div>
            <header>
                <h1>Product List</h1>

                {
                    productList.map((product, index) => (
                        <Link to = {`/products/${product._id}`}>
                        <div key={index}>
                            <p>{product.name}</p>
                        </div>
                        </Link>

                    ) )
                }
            </header>
        </div>
    )
}

export default AllProducts;