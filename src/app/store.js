import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/User/userSlice';
import racketSlice from '../pages/racketSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';


const reducers = combineReducers ({
    user: userSlice,
    racket: racketSlice
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
    
});