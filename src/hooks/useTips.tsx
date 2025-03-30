import { useCallback } from "react";

export const useTips = () => {
	const fetchTips = useCallback(async (fsqId: string) => {
		try {
			const response = await fetch(`https://api.foursquare.com/v3/places/${fsqId}/tips`, {
				headers: {
					'Authorization': process.env.NEXT_PUBLIC_API_KEY ? process.env.NEXT_PUBLIC_API_KEY : '',
				}
			});

			const data = await response.json();
			return data;
		} catch (error) {
			console.log('Error while fetching tips: ' + error);
		}
	}, []);

	return { fetchTips };
};