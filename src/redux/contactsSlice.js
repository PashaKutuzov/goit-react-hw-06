import {createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";


const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: initialContacts
    },
    reducers: {
        deleteContacts: (state, action) => {
            return {
                ...state,
     items: state.items.filter(contact => contact.id !== action.payload)
            }
        },
        addContacts: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload],
            }
        }
    }
});

export default slice.reducer;
export const { deleteContacts, addContacts } = slice.actions;

