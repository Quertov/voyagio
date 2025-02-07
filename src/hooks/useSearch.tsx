'use client';

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const useSearch = () => {
	const router = useRouter();

	const fetchPlaces = useCallback((query: string) => {
		router.push(`/results?query=${query}`);
	}, []);

	return { fetchPlaces };
}