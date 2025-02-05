'use client';

import { useState, useEffect, useCallback } from "react";
import { redirect } from "next/navigation";
import 'dotenv/config';

export const useSearch = () => {
	const [isLoading, setLoading] = useState<boolean>(false);

	const fetchData = useCallback(async (query: string) => {
		setLoading(true);
		try {
			var apiKey = process.env.NEXT_PUBLIC_API_KEY;
			if (!apiKey) {
				throw new Error('Api key is not defined');
			}
			var url = `https://api.foursquare.com/v3/places/search?categories=16000&near=${query}&limit=50`;
			var options: Object = {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Authorization': process.env.NEXT_PUBLIC_API_KEY
				}
			};
			var response = await fetch(url, options);
			var data = await response.json();
			var results = data.results;
			console.log(results);
		} catch (error) {
			console.log('Error fetching data: ' + error);
		} finally {
			setLoading(false);
			redirect('/results');
		}
	}, []);

	return { fetchData };
};