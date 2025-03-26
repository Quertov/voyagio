'use client';

import styles from '@/styles/Search.module.css';
import { FC, useCallback, useMemo, useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { toast, ToastContainer } from 'react-toastify';
import Image from 'next/image';
import SearchIcon from '../../public/icons/search.svg';
import StarIcon from '../../public/icons/star.svg';
import RestrauntIcon from '../../public/icons/restraunt.svg';
import HotelIcon from '../../public/icons/hotel.svg';
import clsx from 'clsx';
import { categoryId } from '@/data/categoriesPresets';
import { categoryTexts } from '@/data/categoriesPresets';

const Search: FC = () => {
	const { fetchPlaces } = useSearch();
	const [isEnglishQuery, setEnglishQuery] = useState<boolean>(true);
	const [query, setQuery] = useState<string>('');
	const [category, setCategory] = useState<'landmarks' | 'hotels' | 'restaurants'>('landmarks');

	const searchHandler = useCallback((event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
		if ('key' in event && event.key !== 'Enter') return;

		if (!query) return;
		const isEnglish = /^[a-zA-Z\s]+$/.test(query);
		if (!isEnglish) {
			setEnglishQuery(false);
			toast.error('Введіть назву англійською мовою', {
				position: 'bottom-right',
				autoClose: 4000,
				pauseOnHover: true,
				theme: 'light'
			});
			return;
		} else {
			setEnglishQuery(true);
		}

		try {
			const places = fetchPlaces(categoryId[category], query);
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
			<div className={ styles.hero__title_container }>
				<h1 className={ styles.hero__title }>{ categoryTexts[category].title }</h1>
			</div>
			<div className={ styles.hero__categories_container }>
					<div
						className={ clsx(styles.hero__category, ( category === 'landmarks' ? 'border-b-2 border-black' : '' )) }
						onClick={ () => setCategory('landmarks') }>
						<Image src={ StarIcon } alt='' width={ 28 } height={ 28 } />
						Визначні місця
					</div>
					<div
						className={ clsx(styles.hero__category, ( category === 'hotels' ? 'border-b-2 border-black' : '' )) }
						onClick={ () => setCategory('hotels') }>
						<Image src={ HotelIcon } alt='' width={ 28 } height={ 28 } className='mr-[3px]' />
						Готелі
					</div>
					<div
						className={ clsx(styles.hero__category, ( category === 'restaurants' ? 'border-b-2 border-black' : '' )) }
						onClick={ () => setCategory('restaurants') }>
						<Image src={ RestrauntIcon } alt='' width={ 28 } height={ 28 } />
						Ресторани
					</div>
			</div>
			<div className={ styles.search__container }>
				<Image src={ SearchIcon } alt='Search Icon' width={ 32 } height={ 32 } className='absolute left-[15px] top-[11px]' />
				<input
					value={ query }
					onChange={ (e => setQuery(e.target.value)) }
					onKeyDown={ searchHandler }
					type="text"
					className={ `${ styles.search } ${ isEnglishQueryStyles }` }
					pattern="[u0750-\u077F]"
					placeholder={ categoryTexts[category].placeholder } />
				<button
					aria-label='Search button'
					className={ styles.search__button }
					onClick={ searchHandler } >Пошук</button>
				</div>
			<ToastContainer />
		</main>
	)
};

export default Search;