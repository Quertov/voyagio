import { FC, useEffect } from "react";
import styles from "@/styles/results/Place.module.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ICategory } from "@/types/types";

interface PlaceProps {
	name: string,
	photos: { [key: string]: string[] },
	fsqId: string,
	category: ICategory[]
};

const poppins = Poppins({
	variable: "--poppins-font",
	weight: ['400', '500', '600', '700'],
	style: 'normal',
	subsets: ['latin', 'latin-ext']
});

export const Place: FC<PlaceProps> = ({ name, photos, fsqId, category }) => {
	return (
		<>
			{
				photos[fsqId]?.[0]
				&& (
					<article className={ `${styles.place__container} ${poppins.variable} antialiased` }>
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
					</article>
				)
			}
		</>
	)
}