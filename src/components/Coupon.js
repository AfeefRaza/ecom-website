import React from 'react'
import coupon from './10$.png'
import './Coupon.css'
import Ten$ from './Ten$';
export default function Coupon() {
  return (
    <div>
      <div className="coupon-container">
        <Ten$/>
        <div className="text">
          <h4>$10 discount!</h4>
          <p>
            Enter BESTSELLERQ3 for $10 off selected items.*|*Min purchase $50,
            valid till 24 Sept. See T&C
          </p>
        </div>
        {/* <button className='coupon-btn'>Claim coupon &rarr;</button> */}

        <div className="coupon-btn">
          <a href="#">
            <span>Claim coupon &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
