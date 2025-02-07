'use client';

import styles from '@/styles/Search.module.css';
import { FC, useCallback, useMemo, useState } from "react";
import { useSearch } from "@/hooks/useSearch";

const Search: FC = () => {
	const { fetchPlaces } = useSearch();
	const [isEnglishQuery, setEnglishQuery] = useState<boolean>(true);
	const [query, setQuery] = useState<string>('');

	const keyDownHandler = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter') return;

		if (!query) return;
		const isEnglish = /^[a-zA-Z\s]+$/.test(query);
		if (!isEnglish) {
			setEnglishQuery(false);
			return;
		} else setEnglishQuery(true);

		try {
			const places = fetchPlaces(query);
			console.log(places);
		} catch (error) {
			console.log(error);
		}
	}, [query]);

	const isEnglishQueryStyles = useMemo(() => (
		!isEnglishQuery ? 'border-red-600 ' : 'border-black'
	), [isEnglishQuery, query]);

	return (
		<main className={ styles.hero__container }>
			<div className={ styles.hero__inner }>
				<div className={ styles.hero__title_container }>
					<h1 className={ styles.hero__title }>Крок до подорожі</h1>
				</div>
				<div className={ styles.search__container }>
					<input value={ query } onChange={ (e => setQuery(e.target.value)) } onKeyDown={ keyDownHandler } type="text" className={ `${ styles.search } ${ isEnglishQueryStyles }` } pattern="[u0750-\u077F]" />
					{ !isEnglishQuery
						? <span className='text-white font-bold'>Будь ласка, введіть англійську назву міста</span>
						: '' }
				</div>
			</div>
		</main>
	)
};

export default Search;