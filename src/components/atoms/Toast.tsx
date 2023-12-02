"use client";

import { Button, Toast } from "flowbite-react";
import { useContext, useEffect } from "react";
import { HiCheck } from "react-icons/hi";
import { CustomContext } from "@utils";

function CustomToast() {
  const { showToast, setShowToast } = useContext(CustomContext);
  useEffect(() => {
    if (showToast) {
      const timeoutId = setTimeout(() => {
        setShowToast(() => false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [showToast, setShowToast]);

  return (
    <div className="space-y-4 absolute z-[50] right-5 bottom-10">
      {showToast && (
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Item added to cart!</div>
          <Toast.Toggle onDismiss={() => setShowToast(false)} />
        </Toast>
      )}
    </div>
  );
}

export default CustomToast;
