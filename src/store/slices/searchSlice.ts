import { IPlace } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
	isEnglishQuery: boolean | null
};

const initialState: SearchState = {
	isEnglishQuery: null
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		isEnglishQuery: (state, action: PayloadAction<boolean>) => {
			state.isEnglishQuery = action.payload;
		},
	},
});

export const { isEnglishQuery } = searchSlice.actions;
export default searchSlice.reducer;