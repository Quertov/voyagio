'use client';

import { useState, useCallback } from "react";

export const usePhotos = () => {
	const fetchPhotos = useCallback(async (fsqId: string) => {
		try {
			const response = await fetch(`https://api.foursquare.com/v3/places/${fsqId}/photos`, {
				headers: {
					'Authorization': 'fsq3liNFQENwTSKJG93ZtjYahs290ODBxw442fDtuSdlS2s=',
				}
			});
			const data = await response.json();

			const photos = data.map((photo: { prefix: string, width: number, suffix: string }) => (
				`${photo.prefix}${photo.width}${photo.suffix}`
			));

			return photos;
		} catch (error) {
			console.error('Error while fetching photos:', error);
			return [];
		}
	}, []);

	return { fetchPhotos };
}