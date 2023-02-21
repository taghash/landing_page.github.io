/**
 * @format
 */
import Image from 'next/image';
import React from 'react';
import { productsForHomePage } from '../../helpers/products';
import Card from '../Card';

const ProductsDetails = () => {
  return (
    <div className="p-5 md:p-10  bg-neutral-100">
      <h4 className="font-bold text-2xl text-center p-5 pb-10 capitalize">
        Offerings
      </h4>
      <div className="grid lg:grid-cols-3 gap-10 text-center ">
        {productsForHomePage.map(product => (
          <Card
            body={product.description}
            title={product.name}
            image={product.image}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsDetails;
