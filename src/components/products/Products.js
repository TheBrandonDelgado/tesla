import React from 'react';
import Product from './Product';
import { productsData } from './productsData';

function Products() {
    return (
        <div className="products-container">
            { productsData.map(product => <Product product={product} />) }
        </div>
    );
}

export default Products;