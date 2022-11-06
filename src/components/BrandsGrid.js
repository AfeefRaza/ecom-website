import React, { useEffect, useState } from 'react'
import BrandItem from './BrandItem'
import './BrandsGrid.css'
// import Iphone from './iphone.webp'
import Categories from './categories.json'
export default function BrandsGrid(props) {
  // let Categories = "https://fakestoreapi.com/products/categories"
//   const [categories, setCategories] = useState([])
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products/categories')
//         .then((res) => res.json())
//         .then((data) => setCategories(data))
// }, [])
  return (

    <div>
        <div className="Brand-container">
            <div className="heading">
                <h1 href="#" className='Big-text'> {props.Bigheading}</h1>
                {/* <a href="#" className='Small-text'>{props.Smallheading}</a>  */}
            </div>
            <div className="Brands">
            {Categories.map((category) => {
                        return (
                            <div className="BrandsItem" key={category.id}>
                          <BrandItem BrandName = {category.title}  BrandImg= {category.image} Route = {category.title}/>
                          </div>


                        )

                    }

                    )}
                    
                
            
            </div>
        </div>
    </div>
  )
}
