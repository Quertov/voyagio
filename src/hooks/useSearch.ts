import { useRouter } from "next/navigation";

export const useSearch = () => {
	const router = useRouter();

	const fetchPlaces = (category: number, query: string) => {
		router.push(`/results?category=${category}&query=${query}`);
	};

	return { fetchPlaces };
};