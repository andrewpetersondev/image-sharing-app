import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // Add reducers here
    loginSuccess: (state, action) => {
      state.user = action.payload
      state.isFetching = false
      state.error = false
    },
  },
})

export const { loginSuccess } = userSlice.actions

export default userSlice.reducer
