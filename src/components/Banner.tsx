'use client';

import { FC, useEffect, useState } from "react";
import { Manrope } from "next/font/google";
import styles from '@/styles/Banner.module.css';
import Image from "next/image";

const manrope = Manrope({
	variable: "--manrope-font",
	weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
});

export const Banner: FC = () => {
	const [currentBanner, setCurrentBanner] = useState<string>('banner1');

	useEffect(() => {
		let bannerNumber = 1;

		const bannerChangeInterval = setInterval(() => {
			if (bannerNumber > 3) {
				bannerNumber = 1;
			}
			setCurrentBanner(`banner${bannerNumber}`);
			++bannerNumber;
		}, 7000);

		return () => clearInterval(bannerChangeInterval);
	}, []);

	return (
		<div className={ `${ styles.banner__container } ${manrope.variable} antialiased` }>
			<div className={ styles.banner__image_container }>
				<div className={ styles.banner__text_container }>
					<div className={ styles.banner__text_wrapper }>
						<h1>Сплануй свою подорож</h1>
						<p>Відкрий для себе нові місця та незабутні враження разом із <strong className="font-bold underline underline-offset-8">Voyagio</strong></p>
					</div>
				</div>
				<Image alt="" src={ `/images/${currentBanner}.webp` } width={1200} height={700} className={ styles.banner__image } />
			</div>
		</div>
	)
}