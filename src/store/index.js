import { configureStore } from "@reduxjs/toolkit";
import beersReducer from "../features/beers/beersSlice";

export default configureStore({
    reducer:{beersReducer}
})