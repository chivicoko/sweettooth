// export interface Product {
//     id: number;
//     favorite: string;
//     image: string;
//     name: string;
//     weight: string;
//     amount: string;
//     cart: string;
//   }


// src/types.ts

export interface Product {
  cart: string;
  image: string;
  id: string;
  weight: string;
  amount: string;
  name: string;
  description?: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  favorite: string;
  photos: {
    url: string;
    position: number;
  }[];
  current_price: {
    NGN: [number, any, any[]];
  }[];
  available_quantity: number;
}
