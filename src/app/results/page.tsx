'use client';

import { FC } from "react";
import styles from '@/styles/results/Results.module.css';
import { useSearchPlacesQuery } from "@/store/slices/apiSlice";
import { useSearchParams } from "next/navigation";

// types
import { IPlace, IResponse } from "@/types/types";

// components
import { Loader } from "@/components/utils/Loader";
import { NoResults } from "@/components/utils/NoResults";

const Results: FC = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get('query') || '';
	const { data, error, isLoading } = useSearchPlacesQuery(query);

	if (isLoading) return <Loader />
	if (error) return <NoResults query={ query } />
	if (!data || !data.results?.length) return <span>No results</span>

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