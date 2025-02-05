import { FC } from "react";
import styles from '@/styles/Header.module.css';
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
	return (
		<div className={ styles.header }>
			<div className={ styles.header__logo_container }>
				<Link href='/'>
					<Image src='/logo.png' alt="Logo" width={115} height={31} />
				</Link>
			</div>
		</div>
	)
};

export default Header;