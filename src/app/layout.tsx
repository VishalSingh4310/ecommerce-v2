"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@molecules";
import CustomContext from "../utils/context";
import { useState } from "react";
import { CartSideBar } from "@molecules";
import { CustomToast } from "@atoms";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showToast, setShowToast] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <CustomContext.Provider
          value={{
            cart,
            isCartOpen,
            setCart,
            setIsCartOpen,
            setShowToast,
            showToast,
          }}
        >
          <Navigation />
          <CartSideBar />
          <CustomToast />
          {children}
        </CustomContext.Provider>
      </body>
    </html>
  );
}
