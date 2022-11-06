import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Allproducts.css'
import Categories from './categories.json'
import ForYouItem from './ForYouItem'

export default function Allproducts(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${props.category}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    // const [categories, setCategories] = useState('electronics')
    // const updateCategory = async ()=> {
    //     const url = 'https://fakestoreapi.com/products/categories'
    //    let data = await fetch(url);
    //    let parsedData = await data.json()
    //    setCategories(parsedData.title)
    // }
    // useEffect(() => {
    //     updateCategory();
    // }, [])
    return (
        <>
            <div className="banner">
                <h1>{props.category}</h1>
                <h4>Get best items in budget</h4>
            </div>
            <div className="main-grid">
                <div className="left-grid">
                    <div className="left-categories">
                        <h1>Collections</h1>
                         <h4 className='products-categories'>electronics</h4>
                         <h4 className='products-categories'>jewelery</h4>
                         <h4 className='products-categories'>men's clothing</h4>
                         <h4 className='products-categories'>women's clothing</h4>
                    </div>
                </div>

                <div className="right-grid">

                    <div className="row ">
                        {products.map((product) => {
                            return (
                                <div className="col-md-4 my-2 Products">
                                    <ForYouItem Title={product.title.slice(0, 21)} Price={product.price} Imageurl={product.image} rate={product.rating.rate} count={product.rating.count} />
                                </div>


                            )

                        }

                        )}



                    </div>
                </div>
            </div>
        </>
    )
}
