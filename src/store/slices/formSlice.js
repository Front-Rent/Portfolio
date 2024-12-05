import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendEmailWithEmailJS } from "../../server/email";

export const sendEmail = createAsyncThunk(
  "form/sendEmail",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await sendEmailWithEmailJS(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: {
      name: "",
      email: "",
      message: "",
    },
    status: null,
    error: null,
  },
  reducers: {
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(sendEmail.fulfilled, (state) => {
        state.status = "success";
        state.formData = { name: "", email: "", message: "" };
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
