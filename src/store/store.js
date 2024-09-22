import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../reducer/reducer';

const store = configureStore({
    reducer: themeReducer,
});

export default store;