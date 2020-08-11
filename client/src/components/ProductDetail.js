import React from 'react';

const ProductDetail = ({product, addToCart}) => {

  const handlePassToList = () => {
    if(product.stock > 0){
      const updatedProduct = product;
      updatedProduct.stock -= 1;
      addToCart(updatedProduct)
    }
  }

  return (
    <div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <img src={product.image} alt={product.name} className="detailImage"/>
    </article>
  </div>
  <div class="tile is-parent is-8">
    <article class="tile is-child box has-text-left">
      <p class="subtitle">{product.name}</p>
      <div class="content">
        <p>{product.description} From {product.location}</p>
        <p>abv: {product.percent}%</p>
        <p>price: £{product.price.toFixed(2)}</p>
        <p style={{display: product.stock > 0 ? 'inline-block': 'none'}}>{product.stock} items available in stock</p>
        <p style={{display: product.stock === 0 ? 'inline-block': 'none'}}>Sorry, item is temporarily Out of Stock</p>
        <p><button style={{display: product.stock > 0 ? 'inline-block' : 'none' }} className="button" onClick={handlePassToList}>Add to Cart</button></p>
        <p><button style={{display: product.stock === 0 ? 'inline-block' : 'none' }} className="button" >Sold Out</button></p>
      </div>
    </article>
  </div>
</div>

  )
}

export default ProductDetail
// <div className="">
//   <img src={product.image} alt={product.name} height="200"/>
//   <h3>{product.name}</h3>
//   <p>ABV: {product.percent}%</p>
//   <p>{product.description}</p>
//   <p>{product.location}</p>
//   <p>£{product.price}</p>
//   <button className="button" onClick={handlePassToList}>Add to Card</button>
// </div>
