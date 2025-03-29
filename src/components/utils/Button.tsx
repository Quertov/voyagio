import { FC } from "react";
import styles from '@/styles/utils/Button.module.css';
import Link from "next/link";

interface ButtonProps {
	children: React.ReactNode,
	isLink?: boolean
	href?: string
};

const Button: FC<ButtonProps> = ({ children, isLink, href }) => {
	return (
		<>
			{
				!isLink
					? (
						<button className={ styles.button }>{ children }</button>
					)
					: (
						<Link href={ href ? href : '' } target="_blank" className={ styles.button }>{ children }</Link>
					)
			}
		</>
	)
};

export default Button;