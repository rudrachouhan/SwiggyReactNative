import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./store/CartReducer";

export default configureStore({
    reducer: {
        cart:CartReducer
    }
})