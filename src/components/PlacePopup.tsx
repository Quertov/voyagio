import { FC } from "react";
import styles from '@/styles/PlacePopup.module.css';
import { ICategory, ILocation } from "@/types/types";
import { IGeocodes } from "@/types/types";
import Image from "next/image";
import { Poppins } from "next/font/google";
import XIcon from '../../public/icons/x.svg';
import clsx from "clsx";

const poppins = Poppins({
	variable: "--poppins-font",
	weight: ['400', '500', '600', '700'],
	style: 'normal',
	subsets: ['latin', 'latin-ext']
});

interface PlacePopupProps {
	isOpened: boolean,
	setIsOpened: React.Dispatch<React.SetStateAction<boolean>>
	name: string,
	photos: { [key: string]: string[] }
	fsqId: string,
	category: ICategory,
	location: ILocation
	geocodes: IGeocodes
};

export const PlacePopup: FC<PlacePopupProps> = ({ isOpened, setIsOpened, name, photos, fsqId }) => {
	return (
		<section
			className={ clsx(styles.popup__wrapper, poppins.variable, (isOpened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none') ) }
			onClick={ () => setIsOpened(false) } >
			<div
				className={ clsx(styles.popup__container, (isOpened ? 'translate-x-0' : 'translate-x-[700px]')) } >
				<div className={ styles.popup__inner }>
					<div className={ styles.popup__close_container } onClick={ (event: React.MouseEvent<HTMLDivElement>) => {
						event.stopPropagation();
						setIsOpened(false);
					} }>
						<Image alt="Закрити інформацію про місце" src={ XIcon } width={40} height={40} className="cursor-pointer hover:opacity-50"/>
						<Image alt="Логотип" src="/logo.png" width={115} height={31} />
					</div>
					<div className={ styles.place__info }>
						<Image alt="Фото місця" src={ photos[fsqId]?.[0] } width={500} height={400} className="rounded-2xl" />
						<h1 className={ styles.place__name }>{ name }</h1>
					</div>
				</div>
			</div>
		</section>
	)
}