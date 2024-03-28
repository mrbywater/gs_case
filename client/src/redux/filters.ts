import {createSlice, current} from "@reduxjs/toolkit";

export {}

type Filter = string

type FilterState = {
    list: Filter[]
}

const initialState: FilterState = {
    list:[]
}

const counterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter(state, action) {
            state.list.push(action.payload)
        },
        removeFilter(state, action) {
            state.list = state.list.filter((item)=> item !== action.payload)
        },
        rewriteFilter(state, action) {
            state.list.splice(action.payload.index, 1, action.payload.title)
        },
        cleanFilter(state) {
           state.list.length = 0
        },
    }
})

export const {addFilter, removeFilter, cleanFilter, rewriteFilter} = counterSlice.actions;
export default counterSlice.reducer;