"use client";
import { Dispatch, SetStateAction, createContext } from "react";
const CustomContext = createContext<CustomContextProps>({
  showToast: false,
  cart: [],
  setShowToast: (...args: any): any => ({}),
  setCart: (...args: any): any => ({}),
  isCartOpen: false,
  setIsCartOpen: (...args: any): any => ({}),
});
export default CustomContext;

interface CustomContextProps {
  cart: any[];
  isCartOpen: boolean;
  showToast: boolean;
  setCart: Dispatch<SetStateAction<any[]>>;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  setShowToast: Dispatch<SetStateAction<boolean>>;
}
