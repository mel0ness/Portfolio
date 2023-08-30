import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ID: ""
} 

const {actions, reducer} = createSlice({
    name: "modale",
initialState,
reducers: {
Select : {
    reducer: (draft, action) => {
        draft.ID = action.payload;
        draft.opened = true;
    }
},
Erase : {
    reducer: (draft) => {
        draft.ID = "";
        draft.opened = false;
    }
}
}
})

export const {Select, Erase} = actions;

export default reducer;