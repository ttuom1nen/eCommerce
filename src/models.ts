import { Interface } from "readline";

export interface ShopCollection {
  id: number;
  title: string;
  routeName: string;
  items: ShopItem[];
}

export interface ShopItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface Section {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
}

export interface User {
  id?: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  displayName: string;
  email: string;
}

export interface SignUpInfo {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
