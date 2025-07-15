import React, { createContext, useReducer, type Dispatch } from 'react';

type Item = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
};
type State = {
  items: Item[];
  totalPrice: number;
};

type Action =
  | { type: 'ADD_TO_CART'; payload: Item }
  | { type: 'REMOVE_FROM_CART'; payload: number };

type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const Context = createContext<ContextType | undefined>(undefined);

const intialState: State = {
  items: [],
  totalPrice: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newItems;
      if (existingIndex === -1) {
          newItems = [...state.items, action.payload];
          state.items.findIndex((item)=>item.quantity=1)
          
      } else {
        newItems = [...state.items];
        newItems[existingIndex].quantity += 1;
      }
      const newPrice = state.items.reduce(
        (acc, item) => (acc = acc + item.price * item.quantity),
        0
      );
      return {
        ...state,
        items: newItems,
        totalPrice: newPrice,
      };
    }
      case 'REMOVE_FROM_CART': {
          const newItems = state.items.filter((item) => item.id !== action.payload);
          const newPrice = newItems.reduce((acc, item) => acc = acc + item.price * item.quantity, 0);
          return {
              ...state,
              items: newItems,
              totalPrice:newPrice,
          }
    }
    default:
      return state;
  }
};

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  console.log(Context);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
