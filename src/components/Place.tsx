import { FC } from "react";
import styles from "@/styles/results/Place.module.css";
import Image from "next/image";

interface PlaceProps {
	name: string,
	photos: { [key: string]: string[] },
	fsqId: string
};

export const Place: FC<PlaceProps> = ({ name, photos, fsqId }) => {
	console.log(photos);

	return (
		<article>
			<Image className={ styles.place__image } alt="Place image" width={368} height={276} src={ photos[fsqId]?.[0] } />
			<h1 className={ styles.place__name }>{ name }</h1>
		</article>
	)
}