import { CartIcon } from "@assets";
import React, { FC, ReactElement, ReactNode } from "react";
interface BadgeProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: ReactNode;
  count?: string | number;
}
const Badge: FC<BadgeProps> = ({ icon, count, ...props }) => {
  return (
    <button
      {...props}
      type="button"
      className="relative inline-flex items-center  text-sm font-medium text-center "
    >
      {icon ? icon : <></>}
      {count && (
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          {count}
        </div>
      )}
    </button>
  );
};

export default Badge;
