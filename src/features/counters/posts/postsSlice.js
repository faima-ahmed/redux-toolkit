import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import reducer from "../countersSlice";
import { getPosts } from "./postsApi";

const initialState={
    post:[],
    isLoading: false,
    isError: false,
    error: null,
}


export const fetchPosts= createAsyncThunk('posts/fetchPosts',
    async()=>{
      const posts= await getPosts();
      return posts;
    }
)

const postsSlice=createSlice({
    name: 'posts',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase()
    }
});

export default postsSlice.reducer;