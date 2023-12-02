import React, { FC } from "react";
interface CartPriceCardProps {
  className?: string;
  itemClassName?: string;
  title: string;
  value: string | number;
}
const CartPriceCard: FC<CartPriceCardProps> = ({
  title,
  value,
  className,
  itemClassName,
}) => {
  return (
    <div
      className={`${className} flex text-gray-600 items-center justify-between mb-2`}
    >
      <h2>{title}</h2>
      <h2 className={`${itemClassName}`}>{value}</h2>
    </div>
  );
};

export default CartPriceCard;
