"use client";
import React, { FC, useEffect, useState } from "react";
import { SelectedCategory, getFirstWord } from "@utils";
import { Card, ProductCard } from "@molecules";
interface ProductProps {
  categoryName: string;
}
const Product: FC<ProductProps> = ({ categoryName }) => {
  const [data, setData] = useState<any>({});
  useEffect(() => {
    const found = SelectedCategory.find((cat) => cat.name === categoryName);
    if (found) {
      setData(found.data);
    }
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.keys(data).map((key: string, index) => (
        <ProductCard
          key={data && data[key].title}
          to={`/${categoryName}/${index}`}
          title={data[key].title}
          rating={data[key].ratings}
          price={data[key].price}
          img={data[key].ImageUrl}
        />
      ))}
    </div>
  );
};

export default Product;
