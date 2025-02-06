'use client';

import { FC } from "react";
import styles from '@/styles/results/Results.module.css';
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Results: FC = () => {
	const places = useSelector((state: RootState) => state.places);
	const isLoading = useSelector((state: RootState) => state.isLoading);
	const isError = useSelector((state: RootState) => state.isError);

	return (
		<div className={ styles.root }>Results</div>
	)
};

export default Results;