import { FC } from "react";
import styles from '@/styles/Search.module.css';

const Search: FC = () => {
	return (
		<main className={ styles.hero__container }>
			<div className={ styles.hero__inner }>
				<div className={ styles.hero__title_container }>
					<h1 className={ styles.hero__title }>Один крок до твоєї подорожі</h1>
				</div>
				<div className={ styles.search__container }>
					<input type="text" className={ styles.search } />
				</div>
			</div>
		</main>
	)
};

export default Search;