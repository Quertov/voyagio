import { FC } from "react";
import styles from '@/styles/Footer.module.css';
import Image from "next/image";
import XLogo from '../../public/icons/x-twitter-brands.svg';
import DiscordLogo from '../../public/icons/discord-brands.svg';
import Link from "next/link";

export const Footer: FC = () => {
	return (
		<footer className={ styles.footer__container }>
			<div className={ styles.footer__text_container }>
				<p className={ styles.footer__text }>Powered by <Link aria-label="Foursquare website" href="https://foursquare.com/"><b>Foursquare</b></Link></p>
			</div>
			<div className={ styles.footer__socials_container }>
				<Link aria-label="Foursquare on X (Twitter)" href="https://x.com/foursquare?lang=en">
					<Image alt="Foursquare on X (Twitter)" src={ XLogo } width={ 32 } height={ 32 } />
				</Link>
				<Link aria-label="Foursquare on Discord" href="https://discord.com/channels/1002230925935005747/1007296085368242266">
					<Image alt="Foursquare on Discord" src={ DiscordLogo } width={ 32 } height={ 32 } />
				</Link>
			</div>
		</footer>
	)
}