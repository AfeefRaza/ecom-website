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
                                <div className="btnbottom">
                                <a href="#" className="d-flex justify-content-center btn btn-danger ">Buy Now! 	</a></div>

                            </div>
                    </a> 
    </div>
  );
}

