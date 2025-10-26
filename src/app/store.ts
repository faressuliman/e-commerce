import { configureStore } from "@reduxjs/toolkit";
import menuDrawerSlice from "./features/menuDrawerSlice"
import userDrawerSlice from "./features/userDrawerSlice"

export const store = configureStore({
    reducer: {
        menuDrawer: menuDrawerSlice,
        userDrawer: userDrawerSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch