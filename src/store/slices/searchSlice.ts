import { IPlace } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
	places: IPlace[],
	isLoading: boolean
	isError: boolean,
};

const initialState: SearchState = {
	places: [],
	isLoading: false,
	isError: false,
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setPlaces: (state, action: PayloadAction<IPlace[]>) => {
			state.places = action.payload;
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		setError: (state, action: PayloadAction<boolean>) => {
			state.isError = action.payload;
		},
	},
});

export const { setPlaces, setLoading, setError } = searchSlice.actions;
export default searchSlice.reducer;