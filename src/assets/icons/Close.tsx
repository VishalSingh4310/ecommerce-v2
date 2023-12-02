import React, { FC, ReactElement } from "react";
interface CloseProps extends ReactElement<HTMLDivElement> {
  className?: string;
}
const Close: FC<CloseProps> = ({ className, ...props }) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${className} w-6 h-6 mb-4 cursor-pointer`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default Close;
