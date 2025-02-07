'use client';

import { FC } from "react";
import styles from '@/styles/results/NoResults.module.css';
import Link from "next/link";

interface NoResultsProps {
	query: string
};

export const NoResults: FC<NoResultsProps> = ({ query }) => {
	return (
		<div className={ styles.noresults__root }>
			<div className={ styles.noresults__img }></div>
			<span className={ styles.noresults__title }>За запитом «{ query }» нічого не знайдено</span>
			<span className={ styles.noresults__hint }>Спробуйте змінити пошук</span>
			<Link href='/' className={ styles.noresults__link }>Змінити пошук</Link>
		</div>
	)
}