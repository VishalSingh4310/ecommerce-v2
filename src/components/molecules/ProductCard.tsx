"use client";
import { extractFirstNumber, formatNumber } from "@utils";
import { Rating } from "flowbite-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { FC } from "react";
interface CardProps {
  title?: string;
  img?: string;
  desc?: string;
  to: string;
  tag?: boolean;
  rating?: string;
  price?: string;
}
const ProductCard: FC<CardProps> = ({
  title,
  img,
  desc,
  to,
  tag,
  rating,
  price,
}) => {
  const rate = Math.floor(extractFirstNumber(rating) || 0) || 0;

  return (
    <Link href={to}>
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="h-full shadow-normal-plan-card rounded-lg "
      >
        <img
          className="h-full pt-4 w-full min-h-48 max-h-48 object-contain bg-white"
          src={`${img ? img : "https://source.unsplash.com/random/300x200"}`}
          alt={title}
        />
        <div className="p-6">
          {tag && (
            <p className="p-1 w-fit my-4 px-2 text-xs text-white bg-red-700 rounded-md ">
              Deal of the Day
            </p>
          )}
          <h2 className="line-clamp-2 font-medium text-base ">{title}</h2>
          <p className="text-content2">{desc}</p>
          <div className="mt-2">
            <Rating>
              <Rating.Star filled={rate >= 1 ? true : false} />
              <Rating.Star filled={rate >= 2 ? true : false} />
              <Rating.Star filled={rate >= 3 ? true : false} />
              <Rating.Star filled={rate >= 4 ? true : false} />
              <Rating.Star filled={rate >= 5 ? true : false} />
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {rating}
              </p>
            </Rating>
          </div>
          <h1 className="font-bold text-2xl flex pt-2">
            <span className="text-sm font-medium mt-1">₹</span>
            {formatNumber(parseInt(price || ""))}
          </h1>
          {/* <div className="py-4">
            <button className="gradient-premium-bg px-3 py-1  text-white rounded-md btn">
              Add to cart
            </button>
          </div> */}
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
