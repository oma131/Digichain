/* eslint-disable react/prop-types */
// ProductList.js
import React from 'react';

function ProdList({ products }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <input type="checkbox" id={`product-${product.id}`} />
            <label htmlFor={`product-${product.id}`}>
              {product.name} (ID: {product.id}) - Quantity: {product.quantity}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdList;
