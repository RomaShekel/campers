import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        AC: false,
        transmission: false,
        kitchen: false,
        TV: false,
        bathroom: false,
        form: '',
    },
    reducers: {
        changeFilters(state, action) {
            console.log(action.payload)
            state.location = action.payload.location;
        }
    }
})

export const { changeFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;