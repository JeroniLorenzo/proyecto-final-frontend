import { createSlice } from '@reduxjs/toolkit';

export const racketSlice = createSlice({
    name: 'serie',
    initialState: {
      choosen : {},
      rackets : []
    },
    reducers: {
      select: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      find: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      clear: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    }
    
});

export const { select, find, clear } = racketSlice.actions;

export const racketData = (state) => state.racket;

export default racketSlice.reducer;