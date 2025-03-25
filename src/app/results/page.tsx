'use client';

import { FC, useState, useEffect } from "react";
import styles from '@/styles/results/Results.module.css';
import { useSearchPlacesQuery } from "@/store/slices/apiSlice";
import { useSearchParams } from "next/navigation";
import { usePhotos } from "@/hooks/usePhotos";

// types
import { IPlace } from "@/types/types";

// components
import { Loader } from "@/components/utils/Loader";
import { NoResults } from "@/components/utils/NoResults";
import { Place } from "@/components/Place";

const Results: FC = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get('query') || '';
	const category = Number(searchParams.get('category'));
	const { data, error, isLoading } = useSearchPlacesQuery({category, query});
	const { fetchPhotos } = usePhotos();

	const [photos, setPhotos] = useState<{ [key: string]: string[] }>({});

	useEffect(() => {
		if (!data?.results) return;
		const loadPhotos = async () => {
			const newPhotos: { [key: string]: string[] } = {};

			await Promise.all(
				data.results.map(async (place) => {
					newPhotos[place.fsq_id] = await fetchPhotos(place.fsq_id);
				})
			);

			setPhotos(newPhotos);
		}

		loadPhotos();
	}, [data, fetchPhotos]);

	if (isLoading) return <Loader />;
	if (error) return <NoResults query={ query } />;
	if (!data || !data.results?.length) return <span>No results</span>;
		
	return (
		<div className={ styles.root }>
			<h1 className={ styles.results__title }>Результати за запитом: "{ query.charAt(0).toUpperCase() + query.slice(1).toLowerCase() }"</h1>
			<section className={ styles.results__places_grid }>
				{ data.results.map((place: IPlace, i) => (
					<Place
						key={ i }
						name={ place.name }
						photos={ photos }
						fsqId={ place.fsq_id } />
				)) }
			</section>
		</div>
	)
};

export default Results;