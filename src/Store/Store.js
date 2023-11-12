import { configureStore,createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    movies:[],
    genres:[],
    genresLoaded:false
}

const NetflixSlice = createSlice({
    name:"Netflix",
    initialState,
    extraReducers:(builder)=>{}
})

const Url = import.meta.env.VITE_URL;
const Key = import.meta.env.VITE_KEY;

export const getGenres = createAsyncThunk("netflix/genres", async () =>
{
    const data = axios.get(`${Url}/3/genre/movie/list?api_key=${Key}`)
    console.log(data)
})

export const Store = configureStore({
    reducer:{
        Netflix:NetflixSlice.reducer
    }
})