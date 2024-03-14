import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const id = state.items.findIndex(f => {
                f.id === action.id
            });
            state.items.splice(id, 1);
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

console.log(cart);

export const { addItem, removeItem, clearCart } = cart.actions;

export default cart.reducer;