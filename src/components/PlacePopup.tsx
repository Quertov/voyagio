import { FC } from "react";
import styles from '@/styles/PlacePopup.module.css';
import { ICategory, ILocation } from "@/types/types";
import { IGeocodes } from "@/types/types";
import Image from "next/image";
import { Manrope } from "next/font/google";
import XIcon from '../../public/icons/x.svg';
import clsx from "clsx";
import Button from "./utils/Button";
import useEmblaCarousel from "embla-carousel-react";
import ArrowLeft from '@/icons/arrow_left.svg';
import ArrowRight from '@/icons/arrow_right.svg';

const manrope = Manrope({
	variable: "--manrope-font",
	weight: ['400', '500', '700'],
	style: ['normal'],
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext']
});

interface PlacePopupProps {
	placeDetails: {
		isOpened: boolean;
		setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
		name: string;
		photos: { [key: string]: string[] };
		fsqId: string;
		category: ICategory;
		geocodes: IGeocodes;
		country: string;
	};
}

export const PlacePopup: FC<PlacePopupProps> = ({ placeDetails }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const { isOpened, setIsOpened, name, photos, fsqId, category, geocodes, country  } = placeDetails;

	const scrollPrev = () => ( emblaApi && emblaApi.scrollPrev() );
	const scrollNext = () => ( emblaApi && emblaApi.scrollNext() );

	return (
		<section
			className={ clsx(styles.popup__wrapper, manrope.variable, (isOpened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none') ) }
			onClick={ () => setIsOpened(false) } >
			<div
				className={ clsx(styles.popup__container, (isOpened ? 'translate-x-0' : 'translate-x-[700px]')) } >
				<div className={ styles.popup__inner }>
					<div
						className={ styles.popup__close_container }
						onClick={ (event: React.MouseEvent<HTMLDivElement>) => ( event.stopPropagation() ) }>
						<Image
							alt="Закрити інформацію про місце"
							src={ XIcon }
							width={40}
							height={40}
							className="cursor-pointer hover:opacity-50"
							onClick={ () => setIsOpened(false) } />
						<Image alt="Логотип" src="/logo.png" width={115} height={31} />
					</div>
					<div className={ styles.place__info }>
						<div className={ styles.embla } ref={ emblaRef }>
								<div className={ styles.embla__container }>
									{photos[fsqId].map((photo: string, i: number) => (
										<div className={ styles.embla__slide } key={i}>
											<Image alt="Фото місця" src={ photo } width={500} height={300} className="rounded-2xl" />
										</div>
									))}
								</div>
							</div>
							<div className={ styles.embla__navigation_container }>
								<button className={ styles.embla__prev } onClick={ scrollPrev }>
									<Image alt="" src={ArrowLeft} width={30} height={30} />
								</button>
								<button className={ styles.embla__next } onClick={ scrollNext }>
									<Image alt="" src={ArrowRight} width={30} height={30} />
								</button>
							</div>
						<div className={ styles.place__name_container }>
							<Image alt="Країна" src={ `https://flagsapi.com/${country}/flat/64.png` } width={44} height={44} />
							<h1 className={ styles.place__name }>{ name }</h1>
						</div>
						<div className={ styles.place__btn_container }>
							<Button isLink href={ `https://www.google.com.ua/maps/@${geocodes.latitude},${geocodes.longitude},17z` }>Відкрити в Google Maps</Button>
						</div>
						<div className={ styles.place__tips_container }>
							<h2 className={ styles.place__tips_title }>Відгуки</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}