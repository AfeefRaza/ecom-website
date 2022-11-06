import React, {useState} from 'react'
import './BigAd.css'
import ad1 from './ad1.jpg'
import ad2 from './ad2.jpg'
import ad3 from './ad3.jpg'
import ad4 from './ad4.jpg'
export default function BigAd() {
    const [Image, setImage] = useState(ad1)
    const ChangeImage = async (Image)=>{
       setImage(Image);
    }
  return (
    <div>
         <div className="container1">
        <img id='BannerAd' src={`${Image}`} alt="Ad"/>
        <div className="grey-btn">
        <button className='btn-circle' onClick={() => ChangeImage(ad1)}></button>
        <button className='btn-circle' onClick={() => ChangeImage(ad2)}></button>
        <button className='btn-circle' onClick={() => ChangeImage(ad3)}></button>
        <button className='btn-circle' onClick={() => ChangeImage(ad4)}></button>
        </div>
        
        </div> 

    </div>
  )
}
