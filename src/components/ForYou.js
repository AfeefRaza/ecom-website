import React, { useEffect, useState } from 'react'
import './ForYou.css'
import ForYouItem from './ForYouItem'
import Products from './Products.json'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default function ForYou(props) {
    const [visible, setVisible] = useState(4);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4)
    }
    return (
        <div>
            <div className="ForYou-container">
                <div className="heading">
                    <h1 href="#" className='Big-text'> {props.Bigheading}</h1>
                </div>
                <Row className="row " >
                    {Products.slice(0, visible).map((product) => {
                        return (
                            <Col className="col-md-4 my-2 Products" key={product.id}>
                                <ForYouItem Title={product.title.slice(0, 21)} Price={product.price} Imageurl={product.image} rate={product.rating.rate} count={product.rating.count} />
                            </Col>


                        )

                    }

                    )}
                    
                    {
                  visible <= Products.length-1 && 
                  <div className="loadbtndiv">
                    <button className='Load-btn' onClick={showMoreItems}>Load More</button>
                    </div>
                }
                    
                </Row>
            </div>
        </div>

    )
}
