import {createSlice, isAnyOf} from "@reduxjs/toolkit"
import { fetchDataThunk, deleteContactThunk, addContactThunk } from "./operation"


const slice = createSlice({
    name : "contacts",
    initialState: {
          items: [],
          loading: false,
          error: null
        },

    extraReducers: builder => {
        builder
        .addCase(fetchDataThunk.fulfilled, (state, action) => {
             state.loading = false;
              state.error = null;
            state.items = action.payload;
        })
        .addCase(deleteContactThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter((item) => item.id !== action.payload);
        })
        .addCase(addContactThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        .addMatcher(isAnyOf(addContactThunk.rejected, deleteContactThunk.rejected, fetchDataThunk.rejected ),
         (state, action) => {
            state.loading = false;
            state.error = action.payload;
       })
        .addMatcher(isAnyOf(addContactThunk.pending, deleteContactThunk.pending, fetchDataThunk.pending ),
        ), (state) => {
            state.loading = true;
            state.error = null;
       }
    }
})



export const { addContact, deleteContact,dataFullfilledOperation, setError, setLoading } = slice.actions;
export default slice.reducer;

