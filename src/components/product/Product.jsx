import React from 'react'
import './product.css';
import image from '../../img/image1.png'

const Product = ({link}) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} rel="noreferrer">
        <img src={image} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product