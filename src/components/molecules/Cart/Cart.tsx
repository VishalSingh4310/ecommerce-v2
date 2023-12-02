import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CartCard, CartPriceCard } from "@molecules";
import { COUNT, CustomContext, formatNumber } from "@utils";
import React, { FC, useContext } from "react";

const Cart: FC = () => {
  const { cart, setIsCartOpen, setCart } = useContext(CustomContext);
  const totalCartPrice = cart.reduce(
    (a, b) => a + parseFloat(b.price) * b.count,
    0
  );
  const discount = cart.reduce((a, b) => a + b.count, 0) * 1200;
  const total =
    totalCartPrice - discount > 0
      ? totalCartPrice - discount
      : Math.abs(totalCartPrice - discount);

  const handler = (title: string, type: COUNT) => {
    const findProductIndex = cart.findIndex(
      (item: any) => item.title === title
    );
    if (findProductIndex >= 0 && type === COUNT.INC) {
      if (cart[findProductIndex].count < 10) {
        cart[findProductIndex] = {
          ...cart[findProductIndex],
          count: cart[findProductIndex].count + 1,
        };
        setCart(() => [...cart]);
      }
    } else if (findProductIndex >= 0 && type === COUNT.DCR) {
      if (cart[findProductIndex].count > 1) {
        cart[findProductIndex] = {
          ...cart[findProductIndex],
          count: cart[findProductIndex].count - 1,
        };
        setCart(() => [...cart]);
      } else {
        setCart(cart.filter((item: any) => item.title !== title));
      }
    }
  };

  return (
    <div className="h-full overflow-hidden">
      <XMarkIcon
        className="w-6 h-6 mb-2 ml-4 mt-4 cursor-pointer "
        onClick={() => setIsCartOpen(false)}
      />
      {cart.length > 0 ? (
        <div className="flex h-full justify-between flex-col">
          <div className="overflow-auto  p-4 ">
            {cart.map((item, index) => (
              <CartCard
                addOrDeleteHandler={(title, method) => handler(title, method)}
                key={index}
                data={item}
              />
            ))}
          </div>
          <div className=" p-4 mb-14 border-t-2">
            <h1 className="text-black text-lg font-medium inline-flex pb-3 ">
              Price Details
            </h1>
            <div>
              <div className="">
                <CartPriceCard
                  title={`Price (${cart.length} items)`}
                  value={`₹${formatNumber(totalCartPrice)}`}
                />
                <CartPriceCard
                  title="Discount"
                  itemClassName="text-green-400"
                  value={`-₹${formatNumber(discount)}`}
                />
                <CartPriceCard title="Delivery Charges" value={"₹80"} />
              </div>
              <CartPriceCard
                className="text-gray-800 text-lg font-medium py-2"
                title="Total Amount"
                value={`₹${formatNumber(total + 80)}`}
              />
            </div>
            <button className="btn py-3 bg-orange-400 w-full rounded-md hover:opacity-80">
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full ">
          <div className="text-center flex flex-col items-center justify-center">
            <ShoppingCartIcon className="w-12" />
            <p>Your cart awaits a shopping adventure!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
