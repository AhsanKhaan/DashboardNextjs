import React from 'react'
import AddToCart from '../AddToCart'
import Styles from './ProductCard.module.css'
const ProductCard = () => {
  return (
    <>
        <div className={Styles.card}></div>
        <AddToCart />
    </>
  )
}

export default ProductCard