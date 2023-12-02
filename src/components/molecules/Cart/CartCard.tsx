import React, { FC } from "react";
import { COUNT, ProductDetails, formatNumber } from "@utils";
import Image from "next/image";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const CartCard: FC<{
  data: ProductDetails;
  addOrDeleteHandler: (...arg: any) => void;
}> = ({ data, addOrDeleteHandler }) => {
  return (
    <div className="flex pl-0 p-4 pt-0 ">
      <div className="border h-fit max-h-48 p-2 rounded-lg">
        <Image
          className="mr-4 min-h-48  object-contain bg-white"
          priority
          width={150}
          height={150}
          alt={data.title}
          src={data.ImageUrl}
        />
      </div>
      <div className="pl-3">
        <h2 className="line-clamp-2 font-medium text-base ">{data.title}</h2>
        <div className="flex items-center">
          <h1 className="font-base text-sm mr-2 line-through text-gray-400 flex">
            <span className="text-xs font-medium mt-1">₹</span>
            {formatNumber(parseInt(data.price || "") + 1200)}
          </h1>
          <h1 className="font-semibold text-2xl flex mr-4">
            <span className="text-sm font-medium mt-1">₹</span>
            {formatNumber(parseInt(data.price || ""))}
          </h1>
        </div>
        <div className="flex items-center my-4">
          <PlusCircleIcon
            onClick={() => addOrDeleteHandler(data.title, COUNT.INC)}
            strokeWidth={1}
            className="mr-2 w-8 cursor-pointer "
          />
          <span className="border p-1 px-3 rounded-md">{data.count}</span>
          <MinusCircleIcon
            onClick={() => addOrDeleteHandler(data.title, COUNT.DCR)}
            strokeWidth={1}
            className="ml-2 w-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
