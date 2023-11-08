import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth, login, refresh } from "../../api/users";

const __asyncLogin = createAsyncThunk(
  "userSlice/asyncLogin",
  async (payload) => {
    try {
      const result = await login(payload);
      localStorage.setItem("accessToken", result.payload.accessToken);
      localStorage.setItem("refreshToken", result.payload.refreshToken);
      return true;
    } catch {
      return false;
    }
  }
);
