'use client';

import { FC } from "react";
import styles from '@/styles/results/Results.module.css';
import { useSearchPlacesQuery } from "@/store/slices/apiSlice";
import { useSearchParams } from "next/navigation";

// types
import { IPlace } from "@/types/types";

const Results: FC = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get('query') || '';
	const { data, error, isLoading } = useSearchPlacesQuery(query);
	
	if (isLoading) return <span>Loading...</span> // here will be a component
	if (error) return <span>Error loading results</span> // here will be a component
	if (!data) return <span>No results</span>

	return (
		<div className={ styles.root }>
			<h1>Results for { query }</h1>
			<section>
				{ data.results.map((place: IPlace) => (
					<article key={ place.fsqId }>
						<h2>{ place.name }</h2>
					</article>
				)) }
			</section>
		</div>
	)
};

export default Results;