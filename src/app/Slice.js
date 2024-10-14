

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const existingProduct = state.find((product) => product.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity || 1;
            } else {
                state.push(action.payload);
            }
        },
        remove: (state, action) => {
            return state.filter((product) => product.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const productToUpdate = state.find((product) => product.id === id);

            if (productToUpdate) {
                productToUpdate.quantity = quantity;
            }
        },
        
    },
});



export const { add, remove, updateQuantity } = cartSlice.actions;

// export const selectTotalPrice = (state) => {
//     return state.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
// };
export const Totalprice = (state) => {
    return state.cart.reduce((total,product) => total + (product.price * product.quantity),0)
}
export default cartSlice.reducer;
