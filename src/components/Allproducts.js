import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import './Allproducts.css'
// import Categories from './categories.json'
import ForYouItem from './ForYouItem'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Allproducts(props) {
    const [products, setProducts] = useState([]);
    const {category} = props;
    const [cat1, setCat1] = useState(category)
    let cat = `/${cat1}`
    

    useEffect(() => {
        // let cat = {category}
        fetch(`https://fakestoreapi.com/products/category${cat}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [cat1])
    
    let ChangeRoute = (c) => {
       setCat1(c)
     }
    return (
        <>
            <div className="banner">
                <h1>{cat1}</h1>
                <h4>Get best items in budget</h4>
            </div>
            <div className="main-grid">
                <div className="left-grid">
                    <div className="left-categories">
                        <h1>Collections</h1>
                         <h4 className='products-categories' onClick={ () => {ChangeRoute("electronics")} }>electronics</h4>
                         <h4 className='products-categories' onClick={ () => {ChangeRoute("jewelery")} }>jewelery</h4>
                         <h4 className='products-categories' onClick={ () => {ChangeRoute("men's clothing")} }>men's clothing</h4>
                         <h4 className='products-categories' onClick={ () => {ChangeRoute("women's clothing")} }>women's clothing</h4>
                    </div>
                </div>

                <div className="right-grid">

                    <Row className="row ">
                        {products.map((product) => {
                            return (
                                <Col className="col-md-4 my-2 Products">
                                    <ForYouItem Title={product.title.slice(0, 21)} Price={product.price} Imageurl={product.image} rate={product.rating.rate} count={product.rating.count} />
                                </Col>


                            )

                        }

                        )}



                    </Row>
                </div>
            </div>
        </>
    )
}
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