import { createContext, useReducer } from 'react';

export const AddContext = createContext({
    count: 0,
    calculateTotal: () => 0,
    cart: [],
    add: () => null,
    sub: () => null,
    remove: () => null,
});

const INITIAL_STATE = {
    count: 0,
    calculateTotal: 0,
    cart: [],
};

const calculateTotal = (cart) => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
};

const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD':
            const existingProduct = state.cart.find(item => item.id === action.payload.id);

            if (existingProduct) {
                return {
                    ...state,
                    count: state.count + 1,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    count: state.count + 1,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }

        case 'SUB':
            return {
                ...state,
                count: state.count - (state.cart.find(item => item.id === action.payload.id)?.quantity > 1 ? 1 : 0),
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                        : item
                ),
            };

        case 'REMOVE':
            const removedItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (removedItemIndex === -1) {
                return state;
            }

            const removedItem = state.cart[removedItemIndex];
            const updatedCart = [...state.cart.slice(0, removedItemIndex), ...state.cart.slice(removedItemIndex + 1)];
            const updatedCount = state.count - removedItem.quantity;

            return {
                ...state,
                count: updatedCount > 0 ? updatedCount : 0,
                cart: updatedCart,
            };

        default:
            return { ...state };
    }
};

export default function AddProvaider(props) {
    const [{ count, cart }, dispatch] = useReducer(counterReducer, INITIAL_STATE);
    const add = (product) => {
        dispatch({ type: 'ADD', payload: product });
    };
    const sub = (product) => {
        dispatch({ type: 'SUB', payload: product });
    };
    const remove = (product) => {
        dispatch({ type: 'REMOVE', payload: product });
    };
    const values = { count, cart, add, sub, remove, calculateTotal: () => calculateTotal(cart) };
    return (
        <AddContext.Provider value={values}>
            {props.children}
        </AddContext.Provider>
    )
}
