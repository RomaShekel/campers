import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
    baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io'
});

export const getCampersList = createAsyncThunk('campers/getList', 
    async (filters, ThunkAPI) => {
        try {
            const queryParams = new URLSearchParams();

            for (const [key, value] of Object.entries(filters)) {
                if (value !== false && value !== '') {
                    queryParams.append(key, value);
                }
            }

            const response = await api.get(`/campers?${queryParams.toString()}`);

            return response; 
        } catch (e) {
            return ThunkAPI.rejectWithValue(e.massage)
        }
    }
)

export const getCamperById = createAsyncThunk('campers/getById', 
    async (id, ThunkAPI) => {
        try {
            const response = await api.get(`/campers/?id=${id}`);
            return response;
        } catch (e) {
            return ThunkAPI.rejectWithValue(e.massage)
        }
    }
)