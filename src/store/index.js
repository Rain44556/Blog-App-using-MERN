import { configureStore, createSlice } from "@reduxjs/toolkit";

const sliceAuth = createSlice({
    name: "auth",
    initialState:{ isAccessible: false},
    reducers: {
        login(state){
            state.isAccessible = true
        },
        logout(state){
            localStorage.removeItem("userId");
            state.isAccessible = false
        },
    },
});

export const actionsAuth = sliceAuth.actions
export const store = configureStore({
    reducer: sliceAuth.reducer 
})