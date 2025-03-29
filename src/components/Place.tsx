import { FC, useState, useEffect } from "react";
import styles from "@/styles/results/Place.module.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ICategory, ILocation, IGeocodes } from "@/types/types";
import { PlacePopup } from "./PlacePopup";

interface PlaceProps {
	name: string,
	photos: { [key: string]: string[] },
	fsqId: string,
	category: ICategory[],
	geocodes: IGeocodes,
	country: string
};

const poppins = Poppins({
	variable: "--poppins-font",
	weight: ['400', '500', '600', '700'],
	style: 'normal',
	subsets: ['latin', 'latin-ext']
});

export const Place: FC<PlaceProps> = ({ name, photos, fsqId, category, geocodes, country }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);

	useEffect(() => {
		if (isOpened) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpened]);

	return (
		<>
			{
				photos[fsqId]?.[0]
				&& (
					<article className={ `${styles.place__container} ${poppins.variable} antialiased` } onClick={ () => setIsOpened(true) }>
						<Image className={ styles.place__image } alt="Фото місця" width={368} height={276} src={ photos[fsqId]?.[0] } />
						<h1 className={ styles.place__name }>{ name }</h1>
						<span className={ styles.category__name }>
							<Image
								alt="Іконка категорії місця"
								className="inline-block bg-black mr-[10px]"
								src={ `${category[0].icon.prefix }64${category[0].icon.suffix}` }
								width={28}
								height={28} />
							{ category[0].name }
						</span>
						<PlacePopup
							isOpened={ isOpened }
							setIsOpened={ setIsOpened }
							name={ name }
							photos={ photos }
							fsqId={ fsqId }
							category={ category[0] }
							geocodes={ geocodes }
							country={ country } />
					</article>
				)
			}
		</>
	)
}