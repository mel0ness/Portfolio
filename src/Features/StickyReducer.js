import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sticky: false
} 

const {actions, reducer} = createSlice({
    name: "stickNav",
initialState,
reducers: {
Active : {
    reducer: (draft) => {
        draft.sticky = true
    }
},
Disactive : {
    reducer: (draft) => {
        draft.sticky = false
    }
}
}
})

export const {Active, Disactive} = actions;

export default reducer;