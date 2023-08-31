import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


const LINK_PRODUCTS = 'http://localhost:5500/products/' 

export const getAllProducts = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const response = await axios.get(LINK_PRODUCTS)
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return{
        data: products
    }
} 

// export const getAllProductsById = () => {
//     const [product, setProduct] = useState([]);
//     const { id } = useParams();
//     console.log(id);

//     const getProductByid = async () => {
//         const response = await axios.get(`http://localhost:5500/products/${id}`)
//         setProduct(response.data)
//     }

//     useEffect(() => {
//         getProductByid();
//     }, [])

//     return{
//         data: product
//     }
// } 