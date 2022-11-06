import React from 'react'
import BigAd from './components/BigAd';
import BrandsGrid from './components/BrandsGrid';
import Coupon from './components/Coupon';
import ForYou from './components/ForYou';
export default function () {
  return (
    <>
    <BigAd/>
      <Coupon/>
      <BrandsGrid Bigheading ='Categories' Smallheading = "See all &rarr;"/>
      <ForYou Bigheading ='Just for you'/>
    </>
  )
}
