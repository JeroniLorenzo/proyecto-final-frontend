/* Creating a slice of the Redux store. */
import { createSlice } from '@reduxjs/toolkit';

/* Creating a slice of the Redux store. */
export const userSlice = createSlice({
    /* Creating a slice of the Redux store. */
    name: 'user',
    initialState: {
      userPass: {
        token: '',
        user: {}
      }
    },
    reducers: {
      /* A reducer. It is a function that takes the current state and an action, and returns a new
      state. */
      login: (state, action) => {
        /* Returning a new state. */
        return {
          ...state,
          ...action.payload
        }
      },
      logout: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
      
    }
    
});

export const { login, logout} = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;