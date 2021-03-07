import React, { useState } from 'react'

export const Basic1 = () => {
  const [product, setProduct] = useState({name: '', price: ''});

  return (
    <>
      <form>
        <input type='text' value={product.name}
        onChange={event => setProduct({...product, name: event.target.value})}/>
        <input type='text' value={product.price}
        onChange={event => setProduct({...product, price: event.target.value})}/>
      </form>
      <h1>商品：{product.name}</h1>
      <h1>値段：{product.price}</h1>
    </>
  )
}

