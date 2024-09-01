import { createSlice } from "@reduxjs/toolkit";
import { getCamperById, getCampersList } from "./operations.js";

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        campers: [],
        page: 1,
        total: 0,
        favoriteCampers: [],
        loader: false,
        error: false,
    },
    reducers: {
        addInFavorites(state, action) {
            state.favoriteCampers.push(
                state.campers.find(camper => {
                    camper.id = action.payload
                })
            );
        },
        getFavorites(state, action) {
            if (state.campers.length !== 0 &&
                state.favoriteCampers.length !== 0) {
                    state.campers.map(camper => {
                        state.favoriteCampers.includes(camper.id) ? 
                        camper.isFavorite = true :
                        camper.isFavorite = false;
                    })
            }
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getCampersList.pending, (state, action) => {
            state.loader = true;
            state.error = false;
        })
        .addCase(getCampersList.fulfilled, (state, action) => {
            state.loader = false;
            state.total = action.payload.data.total;
            state.campers = [];
            state.campers = action.payload.data.items;
        })
        .addCase(getCampersList.rejected, (state, action) => {
            state.loader = false;
            state.error = true;
        })
        .addCase(getCamperById.pending, (state, action) => {
            state.loader = true;
            state.error = false
        })
        .addCase(getCamperById.fulfilled, (state, action) => {
            state.loader = false;
            localStorage.setItem('camper', action.payload.data.items[0])
        })
        .addCase(getCamperById.rejected, (state, action) => {
            state.loader = false;
            state.error = true;
        })
    }
});

export const { addInFavorites, getFavorites } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;