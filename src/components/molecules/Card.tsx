import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
interface CardProps {
  title?: string;
  img?: string;
  desc?: string;
  to: string;
}
const Card: FC<CardProps> = ({ title, img, desc, to }) => {
  return (
    <Link href={to}>
      <div className=" shadow-normal-plan-card rounded-lg ">
        <Image
          width={400}
          height={300}
          priority
          alt={title || "logo"}
          src={`${img ? img : "https://source.unsplash.com/random/300x200"}`}
          className="h-full w-full  min-h-48 max-h-48 object-cover bg-white"
        />
        <div className="p-6">
          <h2 className="line-clamp-2 font-medium text-xl ">{title}</h2>
          <p className="text-content2">{desc}</p>
          <div className="py-4">
            <button className="gradient-premium-bg px-3 py-1  text-white rounded-md btn">
              Explore
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
