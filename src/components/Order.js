import React from 'react'
import './Order.css'
export default function Order() {
    return (
        <>
            <div className="Order">
                <div className="heading">
                    <h2> Your Orders</h2>
                    <div className="search-orders">
                        <input type="text" placeholder="Search all orders" />
                        <a href="#">Searh Orders</a>
                    </div>
                </div>
                <div className="tablist">
                    <ul>
                        <li className='topbaritem'> <a href="/">Orders</a></li>
                        <li className='topbaritem'> <a href="#">Buy Again</a></li>
                        <li className='topbaritem'> <a href="#">Not Yet Shipped</a></li>
                        <li className='topbaritem'> <a href="#">Digital Orders</a></li>
                        <li className='topbaritem'> <a href="/Login">Cancelled</a></li>
                        
                    </ul>
                    <div className="orders">
                        
                    </div>
                </div>

            </div>
        </>
    )
}
