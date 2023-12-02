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
      <div className="border w-20 h-14 overflow-hidden p-2 rounded-lg">
        <Image
          className="h-10 w-10 overflow-hidden object-contain bg-white"
          priority
          width={150}
          height={150}
          alt={data.title}
          src={data.ImageUrl}
        />
      </div>
      <div className="pl-3 w-full">
        <h2 className="line-clamp-2 font-medium text-sm ">{data.title}</h2>
        <div className="flex items-center mt-1">
          <h1 className="font-sm text-sm mr-2 line-through text-gray-400 flex">
            <span className="text-xs font-medium mt-1">₹</span>
            {formatNumber(parseInt(data.price || "") + 1200)}
          </h1>
          <h1 className="font-semibold text-xl flex mr-4">
            <span className="text-sm font-medium mt-1">₹</span>
            {formatNumber(parseInt(data.price || ""))}
          </h1>
        </div>
        <div className="flex items-center mb-3">
          <PlusCircleIcon
            onClick={() => addOrDeleteHandler(data.title, COUNT.INC)}
            strokeWidth={1}
            className="mr-1 w-6 text-gray-600 cursor-pointer "
          />
          <span className=" p-1 text-sm px-2 rounded-md">{data.count}</span>
          <MinusCircleIcon
            onClick={() => addOrDeleteHandler(data.title, COUNT.DCR)}
            strokeWidth={1}
            className="ml-1 w-6 text-gray-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
