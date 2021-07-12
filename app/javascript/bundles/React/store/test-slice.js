import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: 'test',
  initialState: { status: false },
  reducers: {
    toggle(state) {
      state.status = !state.status;
    }
  }
})

export const testActions = testSlice.actions;
export default testSlice;