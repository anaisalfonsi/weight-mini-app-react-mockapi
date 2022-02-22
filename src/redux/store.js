import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  addWeightToApi,
  deleteWeightFromApi,
  loadUserWeightFromApi,
} from "./api";

const userWeightSlice = createSlice({
  name: "userWeight",
  initialState: {
    weightInfos: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(addWeightToApi.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(addWeightToApi.fulfilled, (state, action) => {
      state.weightInfos.push(action.payload);
      state.loading = false;
    });

    builder.addCase(deleteWeightFromApi.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(deleteWeightFromApi.fulfilled, (state, action) => {
      state.weightInfos = state.weightInfos.filter((t) => t.id !== action.payload);
      state.loading = false;
    });

    builder.addCase(loadUserWeightFromApi.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(loadUserWeightFromApi.fulfilled, (state, action) => {
      action.payload.forEach((info) => {
          info.createdAt = new Date(info.createdAt).toLocaleString('fr-FR');  
      });
      state.weightInfos = action.payload;
      state.loading = false;
    });
  },
});


export const store = configureStore({
  reducer: {
    userWeight: userWeightSlice.reducer,
  },
});
