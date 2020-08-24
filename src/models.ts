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
