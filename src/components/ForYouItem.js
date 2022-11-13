import React from "react";
import "./ForYouItem.css";
export default function ForYouItem(props) {
  return (
    <div className="Item">
       <a href='#' className="card" >
                        <img src={props.Imageurl} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title"> {props.Title}... </h5>
                                <p className="card-text">{props.Price}$</p>
                                <h4> {props.rate} &#11088; </h4><p className='text-muted count'> based on {props.count} reviews</p>
                                <a href="/" className="buybtn">Buy Now! 	</a></div>
                    </a> 
    </div>
  );
}

