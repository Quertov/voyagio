import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponse } from "@/types/types";

export const searchApi = createApi({
	reducerPath: 'searchApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.foursquare.com/v3/places',
		prepareHeaders: (headers) => {
			const apiKey = process.env.NEXT_PUBLIC_API_KEY;
			if (apiKey) {
				headers.set('Authorization', apiKey);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		searchPlaces: builder.query<IResponse, { category: number, query: string }>({
			query: ({ category, query }) => `/search?categories=${category}&near=${query}&limit=50`,
		}),
	})
});

export const { useSearchPlacesQuery } = searchApi;