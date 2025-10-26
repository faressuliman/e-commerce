import { createSlice } from "@reduxjs/toolkit";

interface IUserDrawerState {
    isOpenUserDrawer: boolean
}

const initialState: IUserDrawerState = {
    isOpenUserDrawer: false
}

const userDrawer = createSlice({
    name: "userDrawer",
    initialState,
    reducers: {
        openUserDrawer: (state) => {state.isOpenUserDrawer = true},
        closeUserDrawer: (state) => {state.isOpenUserDrawer = false}
    }
})

export const { openUserDrawer, closeUserDrawer } = userDrawer.actions
export default userDrawer.reducer