'use client';

import { useCallback } from "react";
import { useRouter } from "next/navigation";

export const useSearch = () => {
	const router = useRouter();

	const fetchPlaces = useCallback((category: number, query: string) => {
		router.push(`/results?category=${category}&query=${query}`);
	}, []);

	return { fetchPlaces };
}