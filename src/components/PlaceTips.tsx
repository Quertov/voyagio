import { ITip } from "@/types/types";
import { FC, useState, useEffect } from "react";
import styles from '@/styles/PlaceTips.module.css';
import { useTips } from "@/hooks/useTips";

interface PlaceTipsProps {
	fsqId: string
};

export const PlaceTips: FC<PlaceTipsProps> = ({ fsqId }) => {
	const { fetchTips } = useTips();
	const [tips, setTips] = useState<ITip[]>([]);

	useEffect(() => {
		const getTips = async () => {
			const tips = await fetchTips(fsqId);
			setTips(tips);
		}
		getTips();
	}, []);

	return (
		<div className={ styles.tips__container }>
			<div className={ styles.tips__title_container }>
				<h1 className={ styles.tips__title }>{ !tips.length ? 'Відгуків немає' : 'Відгуки' }</h1>
			</div>
			<ul className={ styles.tips__list }>
				{tips.map((tip: ITip) => (
					<li className={ styles.tip__item } key={ tip.id }>
						<p className={ styles.tip__text }>{ tip.text }</p>
						<time className={ styles.tip__date } dateTime={ tip.created_at }>
							{new Date(tip.created_at).toLocaleDateString('uk-UA', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</time>
						<div className={ styles.tip__line }></div>
					</li>
				))}
			</ul>
		</div>
	)
}