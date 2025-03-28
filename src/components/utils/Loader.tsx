'use client';

import { FC } from "react";
import { InfinitySpin } from "react-loader-spinner";
import styles from '@/styles/utils/Loader.module.css';

export const Loader: FC = () => {
	return (
		<div className={ styles.loader__root }>
			<InfinitySpin
				width="200"
				color="#0b94f8"
  		/>
		</div>
	)
}