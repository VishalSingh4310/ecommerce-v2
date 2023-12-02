import { Mobile } from "./Mobile";
import { Laptop } from "./laptop";
import { MenClothes } from "./menclothes";
import { MenWatch } from "./menwatch";
import { WomenClothes } from "./womenclothes";

export enum Categories {
  Laptop = "Laptop",
  MenWear = "Men Wear",
  WomenWear = "Women Wear",
  Smartphones = "Smartphones",
  Accessories = "Accessories",
}

export const CategoriesData = [
  {
    name: Categories.Laptop,
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: Categories.MenWear,
    image:
      "https://images.unsplash.com/flagged/photo-1564468781192-f023d514222d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: Categories.WomenWear,
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: Categories.Smartphones,
    image:
      "https://images.unsplash.com/photo-1640936343842-268f9d87e764?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: Categories.Accessories,
    image:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const SelectedCategory = [
  {
    name: Categories.Laptop,
    data: Laptop,
  },
  {
    name: Categories.MenWear,
    data: MenClothes,
  },
  {
    name: Categories.WomenWear,
    data: WomenClothes,
  },
  {
    name: Categories.Smartphones,
    data: Mobile,
  },
  {
    name: Categories.Accessories,
    data: MenWatch,
  },
];

export interface ProductDetails {
  title: string;
  ImageUrl: string;
  price: string;
  ratings: string;
  count?: number;
}
