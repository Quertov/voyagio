'use client';

import { FC, useState, useEffect } from "react";
import styles from '@/styles/results/Results.module.css';
import { useSearchPlacesQuery } from "@/store/slices/apiSlice";
import { useSearchParams } from "next/navigation";
import { usePhotos } from "@/hooks/usePhotos";
import Image from "next/image";
import { categoryName } from "@/data/categoriesPresets";

// types
import { IPlace } from "@/types/types";

// components
import { Loader } from "@/components/utils/Loader";
import { NoResults } from "@/components/utils/NoResults";
import { Place } from "@/components/Place";

// icons
import ArrowLeft from '@/icons/arrow_left.svg';
import ArrowRight from '@/icons/arrow_right.svg';

const ITEMS_PER_PAGE = 9;

const Results: FC = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get('query') || '';
	const category = Number(searchParams.get('category'));
	const { data, error, isLoading } = useSearchPlacesQuery({category, query});

	const [currentPage, setCurrentPage] = useState<number>(1);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentItems = data?.results.slice(startIndex, endIndex);
	const totalPages = data?.results ? Math.ceil(data.results.length / ITEMS_PER_PAGE) : 1;

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
	}, [data]);

	if (isLoading) return <Loader />;
	if (error || !data || !data.results?.length) return <NoResults query={ query } />;
		
	return (
		<div className={ styles.root }>
			<h1 className={ styles.results__title }>{ categoryName[category] } за запитом: &quot;{ query.charAt(0).toUpperCase() + query.slice(1).toLowerCase() }&quot;</h1>
			<section className={ styles.results__places_grid }>
				{ currentItems?.map((place: IPlace, i) => (
					<Place
						key={ i }
						name={ place.name }
						photos={ photos }
						fsqId={ place.fsq_id }
						category={ place.categories }
						geocodes={ place.geocodes.main }
						country={ place.location.country } />
				)) }
			</section>
			<div className={ styles.pagination__buttons_container }>
				<button
					disabled={ currentPage === 1 }
					onClick={ () => setCurrentPage((prev) => --prev) }>
						<Image alt="" src={ArrowLeft} width={24} height={24} className="ml-[8px]" />
					</button>
				<span>Сторінка { currentPage } із { totalPages }</span>
				<button
					disabled={ currentPage === totalPages }
					onClick={ () => setCurrentPage((prev) => ++prev) }>
						<Image alt="" src={ArrowRight} width={24} height={24} className="ml-[2px]" />
					</button>
			</div>
		</div>
	)
};

export default Results;