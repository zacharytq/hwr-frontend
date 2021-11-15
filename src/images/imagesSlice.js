import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

const imagesAdaptor = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = imagesAdaptor.getInitialState({
    status: 'idle',
    error: null
})

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default imagesSlice.reducer