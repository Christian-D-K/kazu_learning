import React, { useState } from 'react'

export const Basic2 = () => {
  const [products, setProducts] = useState([]);
  const newProduct = () => {
    setProducts([...products, {
      id: products.length,
      name: 'hello'
    }])
  }

  return (
    <div>
      商品名：<input />    
      <button onClick={newProduct}>新規追加</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}
