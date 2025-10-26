import { createSlice } from "@reduxjs/toolkit";

interface ISidebarState {
    isOpenSidebar: boolean

}

const initialState: ISidebarState = {
    isOpenSidebar: false
}

const menuDrawer = createSlice({
    name: "menuDrawer",
    initialState,
    reducers: {
        openSidebar: (state) => { state.isOpenSidebar = true },
        closeSidebar: (state) => { state.isOpenSidebar = false }
    }
})

export const { openSidebar, closeSidebar } = menuDrawer.actions
export default menuDrawer.reducer