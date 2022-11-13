import { ValidSize } from "./product";

export interface ICartProduct {
  _id: string;
  image: string;
  price: number;
  size?: ValidSize;
  slug: string;
  title: string;
  qty: number;
  gender: ValidGender;
}

export type ValidGender = "men" | "women" | "kid" | "unisex";
