import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUserWeightFromApi = createAsyncThunk(
  "userWeight/loadUserWeightFromApi",
  () => {
    return axios
      .get("https://620a26ee92946600171c5814.mockapi.io/user_weight")
      .then((response) => response.data);
  }
);

export const addWeightToApi = createAsyncThunk("userWeight/addWeightToApi", (weight) => {
  return axios
    .post("https://620a26ee92946600171c5814.mockapi.io/user_weight", {
        weight: weight,
    })
    .then((response) => response.data);
});

export const deleteWeightFromApi = createAsyncThunk(
  "userWeight/deleteWeightFromApi",
  (id) => {
    return axios
      .delete("https://620a26ee92946600171c5814.mockapi.io/user_weight/" + id)
      .then(() => id);
  }
);