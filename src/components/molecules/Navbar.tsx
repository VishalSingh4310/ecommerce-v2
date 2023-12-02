"use client";
import { CartIcon, Logo, ProfileIcon } from "@assets";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";
import { Categories } from "@utils";
import { useParams } from "next/navigation";
import { useContext } from "react";
import CustomContext from "../../utils/context";
import { Badge } from "@atoms";

function CustomNavbar() {
  const params = useParams()!;
  const { cart, isCartOpen, setIsCartOpen } = useContext(CustomContext);
  const category = params?.category
    ? decodeURIComponent(String(params.category))
    : "";
  const customTheme = {
    link: {
      active: {
        on: "bg-[#e59645] text-white dark:text-white md:bg-transparent md:text-[#e59645]",
        off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-[#e59645] md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
    },
  };
  return (
    <Navbar
      theme={customTheme}
      fluid
      rounded
      className="border-b-[1px] border-gray-200 py-3 md:py-6 md:px-28 fixed bg-white w-full z-50"
    >
      <NavbarBrand as={Link} href="/">
        <Image
          className=" w-fit mr-3 ml-2 sm:ml-0 h-9 object-contain"
          src={Logo}
          alt="My Image"
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active={category === "" ? true : false}>
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          href={`/${Categories.MenWear}`}
          active={category === Categories.MenWear ? true : false}
        >
          Men wears
        </NavbarLink>
        <NavbarLink
          href={`/${Categories.WomenWear}`}
          active={category === Categories.WomenWear ? true : false}
        >
          Women wears
        </NavbarLink>
        <NavbarLink
          href={`/${Categories.Accessories}`}
          active={category === Categories.Accessories ? true : false}
        >
          Accessories
        </NavbarLink>
        <NavbarLink
          href={`/${Categories.Smartphones}`}
          active={category === Categories.Smartphones ? true : false}
        >
          Smartphones
        </NavbarLink>
        <NavbarLink
          href={"#"}
          className="cursor-pointer bg-white"
          onClick={() => setIsCartOpen(!isCartOpen)}
          // active={category === Categories.Smartphones ? true : false}
        >
          <Badge
            icon={<CartIcon />}
            count={cart.length > 0 ? cart.length : undefined}
          />
        </NavbarLink>
        <NavbarLink
          href={`/${Categories.Smartphones}`}
          // active={category === Categories.Smartphones ? true : false}
        >
          <ProfileIcon />
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default CustomNavbar;
