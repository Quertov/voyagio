'use client';

import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import 'dotenv/config';

export const useSearch = () => {
	const router = useRouter();

	const fetchPlaces = (category: number, query: string) => {
		router.push(`/results?category=${category}&query=${query}`);
	};

	return { fetchPlaces };
}
	const fetchData = useCallback(async (query: string) => {
		// setLoading(true);
		try {
			const apiKey = process.env.NEXT_PUBLIC_API_KEY;
			if (!apiKey) {
				throw new Error('Api key is not defined');
			}
			const url = `https://api.foursquare.com/v3/places/search?categories=16000&near=${query}&limit=50`;
			const options: object = {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Authorization': process.env.NEXT_PUBLIC_API_KEY
				}
			};
			const response = await fetch(url, options);
			const data = await response.json();
			const results = data.results;
			console.log(results);
		} catch (error) {
			console.log('Error fetching data: ' + error);
		} finally {
			// setLoading(false);
			redirect('/results');
		}
	}, []);

	return { fetchData };
};
