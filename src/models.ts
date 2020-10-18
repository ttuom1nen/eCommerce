export interface ShopCollection {
  id: string;
  title: string;
  routeName: string;
  items: ShopItem[];
}

export interface ShopData {
  [key: string]: ShopCollection;
}

export interface ShopItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ShoppingCartItem extends ShopItem {
  quantity: number;
}

export interface Section {
  title: string;
  imageUrl: string;
  size?: string;
  id: string;
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

// Redux store state

export interface StoreState {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
}

export interface UserState {
  currentUser: User | null;
}

export interface CartState {
  hidden: boolean;
  cartItems: ShoppingCartItem[];
}

export interface ShopState {
  collections: ShopData | null;
}

export interface DirectoryState {
  sections: Section[];
}