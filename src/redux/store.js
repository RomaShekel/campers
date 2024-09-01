import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersList/slice.js";
import { filtersReducer } from "./filters/slice.js";

export const store = configureStore({
    reducer: {
        campers: campersReducer,
        filters: filtersReducer,
    }
})