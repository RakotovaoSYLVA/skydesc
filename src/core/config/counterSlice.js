import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: { registeredUser: null },
    reducers: {
      registerUser: (state, action) => {
        state.registeredUser = action.payload;
      },
    },
  });
  
  export const { registerUser } = userSlice.actions;
export default userSlice.reducer;  
