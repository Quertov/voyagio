import { FC } from "react";
import styles from '@/styles/Footer.module.css';
import Image from "next/image";
import XLogo from '../../public/icons/x-twitter-brands.svg';
import DiscordLogo from '../../public/icons/discord-brands.svg';

export const Footer: FC = () => {
	return (
		<footer className={ styles.footer__container }>
			<div className={ styles.footer__text_container }>
				<p className={ styles.footer__text }>Powered by <b>Foursquare</b></p>
			</div>
			<div className={ styles.footer__socials_container }>
				<Image alt="Foursquare on X (Twitter)" src={ XLogo } width={ 32 } height={ 32 } />
				<Image alt="Foursquare on Discord" src={ DiscordLogo } width={ 32 } height={ 32 } />
			</div>
		</footer>
	)
}