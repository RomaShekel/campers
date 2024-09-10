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
            state.location = action.payload.location;
            state.AC = action.payload.AC;
            state.transmission = action.payload.transmission;
            state.kitchen = action.payload.kitchen;
            state.TV = action.payload.TV;
            state.bathroom = action.payload.bathroom;
            state.form = action.payload.form;
        }
    }
})

export const { changeFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;