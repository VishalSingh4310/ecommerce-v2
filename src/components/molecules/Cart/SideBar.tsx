"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { CustomContext } from "@utils";
import Cart from "./Cart";

const SideBar = () => {
  const { isCartOpen } = useContext(CustomContext);
  const variants = {
    final: { x: 400 },
    initial: { x: -1300 },
  };
  const [isClose, setClose] = useState(false);
  return (
    <AnimatePresence>
      <div className="overflow-hidden h-full bg-red-800">
        <motion.div
          variants={variants}
          animate={isCartOpen ? "inital" : "final"}
          transition={{
            duration: 0.2,
          }}
          onAnimationComplete={(action) => {
            if (action === "final" && !isClose) {
              setClose(true);
            }
          }}
          className={`overflow-auto z-50  w-[400px] border  bg-white h-full fixed 
        ${
          (isCartOpen && !isClose) || (!isCartOpen && !isClose)
            ? "right-0 opacity-0"
            : "-right-[0]"
        }
         top-0 bottom-0`}
        >
          <Cart />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SideBar;
