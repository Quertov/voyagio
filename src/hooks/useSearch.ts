import 'dotenv/config';

export const fetchPlaces = async (query: string) => {
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
	if (!response.ok) throw new Error('Failed to fetch places');

	return response.json();
};