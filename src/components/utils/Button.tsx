import { FC, useMemo } from "react";
import styles from '@/styles/Button.module.css';

interface ButtonProps {
	children: React.ReactNode,
	authorization?: boolean
};

const Button: FC<ButtonProps> = ({ children, authorization }) => {
	const buttonWidth = useMemo(() => (
		authorization ? 'w-[170px]' : 'w-[250px]'
	), [authorization]);
			
	return (
		<button className={ `${ styles.button } ${ buttonWidth }` }>
			{ children }
		</button>
	)
};

export default Button;