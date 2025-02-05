'use client';

import { FC } from "react";
import styles from '@/styles/Search.module.css';
import { useSearch } from "@/hooks/useSearch";

const Search: FC = () => {
	const { fetchData } = useSearch();

	const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter') return;
		const query: string = (event.target as HTMLInputElement).value.trim().toLowerCase();
		fetchData(query);
	}

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