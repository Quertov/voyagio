import { FC } from "react";
import styles from '@/styles/PlacePhotos.module.css';
import useEmblaCarousel from "embla-carousel-react";
import ArrowLeft from '@/icons/arrow_left.svg';
import ArrowRight from '@/icons/arrow_right.svg';
import Image from "next/image";

interface PlacePhotosProps {
	photos: { [key: string]: string[] },
	fsqId: string
};

export const PlacePhotos: FC<PlacePhotosProps> = ({ photos, fsqId }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const scrollPrev = () => ( emblaApi && emblaApi.scrollPrev() );
	const scrollNext = () => ( emblaApi && emblaApi.scrollNext() );

	return (
		<>
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
		</>
	)
}