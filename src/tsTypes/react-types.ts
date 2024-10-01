import { ReactNode } from "react";

export interface IChild {
  children: ReactNode;
}

export interface Image {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface Product {
  description: string;
  id: string;
  images: Image[];
  name: string;
  price: number;
  type: string;
  quantity?: number;
}

export interface UserDetails {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
}

export interface CartItem {
  name: string;
  quantity: number;
  price: number;
  images: Image[];
  type: string;
}

export interface CartState {
  products: CartItem[];
}

export interface IBaseProps {
  size?: string;
  className?: string;
  styles?: string;
}

export interface IconProps extends IBaseProps {
  strokeWidth?: string;
  stroke?: string;
  margin?: string;
  width?: string;
  height?: string;
}
