'use client';

import styles from '@/styles/Search.module.css';
import { FC, useCallback } from "react";
import { fetchPlaces } from "@/hooks/useSearch";
import { useDispatch } from "react-redux";
import { setPlaces, setLoading, setError } from "@/store/slices/searchSlice";
import { useRouter } from "next/navigation";

const Search: FC = () => {
	const dispatch = useDispatch();
	const router = useRouter();

	const keyDownHandler = useCallback(async (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter') return;

		const query: string = (event.target as HTMLInputElement).value.trim().toLowerCase();
		if (!query) return;

		try {
			dispatch(setLoading(true));

			const places = await fetchPlaces(query);
			console.log(places.results);
			dispatch(setPlaces(places.results));
			router.push('/results');
		} catch (error) {
			dispatch(setLoading(false));
			dispatch(setError(true));
		} finally {
			dispatch(setLoading(false));
			dispatch(setError(false));
		}
	}, []);

	return (
		<main className={ styles.hero__container }>
			<div className={ styles.hero__inner }>
				<div className={ styles.hero__title_container }>
					<h1 className={ styles.hero__title }>Крок до подорожі</h1>
				</div>
				<div className={ styles.search__container }>
					<input onKeyDown={ keyDownHandler } type="text" className={ styles.search } />
				</div>
			</div>
		</main>
	)
};

export default Search;