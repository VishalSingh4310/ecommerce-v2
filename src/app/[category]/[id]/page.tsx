"use client";
import { BreadCrumb } from "@atoms";
import { Product } from "@organisms";
import {
  CustomContext,
  Laptop,
  SelectedCategory,
  extractFirstNumber,
  formatNumber,
} from "@utils";
import { Rating } from "flowbite-react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const ProductDetails = ({
  params,
}: {
  params: { category: string; id: string };
}) => {
  const [data, setData] = useState<any>({});
  const { cart, setCart, setShowToast } = useContext(CustomContext);
  useEffect(() => {
    if (params?.category) {
      const found: any = SelectedCategory.find(
        (cat) => cat.name === decodeURIComponent(params.category)
      );
      if (found) {
        Object.keys(found.data).map((key, index) => {
          if (index === parseInt(params.id)) {
            const rate =
              Math.floor(extractFirstNumber(found.data[key].ratings) || 0) || 0;
            setData({ ...found.data[key], rate });
          }
        });
      }
    }
  }, [params.category, params.id]);

  const cartHandler = () => {
    setShowToast(() => true);
    const findProductIndex = cart.findIndex(
      (item: any) => item.title === data.title
    );
    if (findProductIndex < 0) {
      setCart([...cart, { ...data, count: 1 }]);
    } else {
      cart[findProductIndex] = {
        ...data,
        count: cart[findProductIndex].count + 1,
      };
      setCart(cart);
    }
  };
  return (
    <main className="flex min-h-screen flex-col p-10 pt-24 md:p-24">
      <div className="py-4 mb-2">
        <BreadCrumb params={params} />
      </div>
      <div className="flex ">
        {data.ImageUrl && (
          <Image
            className="h-full pt-4 flex-1 min-h-48 max-h-60 object-contain bg-white"
            priority
            width={1000}
            height={1000}
            alt="sdfsd"
            src={data.ImageUrl}
          />
        )}
        <div className="flex-1 p-6 pl-8">
          <h1 className="text-lg">{data.title}</h1>
          <div className="mt-2">
            <Rating>
              <Rating.Star filled={data.rate >= 1 ? true : false} />
              <Rating.Star filled={data.rate >= 2 ? true : false} />
              <Rating.Star filled={data.rate >= 3 ? true : false} />
              <Rating.Star filled={data.rate >= 4 ? true : false} />
              <Rating.Star filled={data.rate >= 5 ? true : false} />
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {data.ratings}
              </p>
            </Rating>
          </div>
          <div className="flex items-end pt-4">
            <h1 className="font-semibold text-3xl flex mr-4">
              <span className="text-sm font-medium mt-1">₹</span>
              {formatNumber(parseInt(data.price || ""))}
            </h1>
            <h1 className="font-base text-lg line-through text-gray-400 flex">
              <span className="text-sm font-medium mt-1">₹</span>
              {formatNumber(parseInt(data.price || "") + 1200)}
            </h1>
          </div>
          <div className="py-4 flex items-center">
            <button
              onClick={cartHandler}
              className="mr-4 hover:opacity-80 gradient-premium-bg px-6 py-3  text-white rounded-md btn"
            >
              Buy now
            </button>
            <button
              onClick={cartHandler}
              className="border hover:opacity-80 border-gray-400 px-6 py-3 rounded-md btn"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-xl mt-8">Similar results</h1>
        <div className="py-6">
          <Product categoryName={decodeURIComponent(params.category)} />
        </div>
      </div>
    </main>
  );
};
export default ProductDetails;
