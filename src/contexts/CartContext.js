"use strict";
// // src/contexts/CartContext.tsx
// import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
// // Define item type
// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }
// // Define state and action types
// interface CartState {
//   items: CartItem[];
//   totalItems: number;
//   totalPrice: number;
// }
// type CartAction =
//   | { type: 'ADD_ITEM'; payload: CartItem }
//   | { type: 'REMOVE_ITEM'; payload: { id: number } }
//   | { type: 'CLEAR_CART' };
// // Initial state
// const initialState: CartState = {
//   items: [],
//   totalItems: 0,
//   totalPrice: 0,
// };
// // Reducer function to manage cart state
// const cartReducer = (state: CartState, action: CartAction): CartState => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       const updatedItems = [...state.items];
//       const itemIndex = updatedItems.findIndex(item => item.id === action.payload.id);
//       if (itemIndex >= 0) {
//         updatedItems[itemIndex].quantity += 1;
//       } else {
//         updatedItems.push({ ...action.payload, quantity: 1 });
//       }
//       return {
//         ...state,
//         items: updatedItems,
//         totalItems: state.totalItems + 1,
//         totalPrice: state.totalPrice + action.payload.price,
//       };
//     case 'REMOVE_ITEM':
//       const filteredItems = state.items.filter(item => item.id !== action.payload.id);
//       const removedItem = state.items.find(item => item.id === action.payload.id);
//       return {
//         ...state,
//         items: filteredItems,
//         totalItems: state.totalItems - (removedItem?.quantity || 0),
//         totalPrice: state.totalPrice - ((removedItem?.price || 0) * (removedItem?.quantity || 0)),
//       };
//     case 'CLEAR_CART':
//       return initialState;
//     default:
//       return state;
//   }
// };
// // Create context
// interface CartContextProps {
//   state: CartState;
//   dispatch: Dispatch<CartAction>;
// }
// export const CartContext = createContext<CartContextProps | undefined>(undefined);
// // Context provider
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);
//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
