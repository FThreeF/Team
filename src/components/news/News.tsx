import s from './News.module.css';

interface INews {
	image: any;
	text: string;
	description: string;
}

const News = ({ image, text, description }: INews) => {
	return (
		<div className={s.news}>
			<img src={image} className={s.image} />
			<div className={s.textWrapper}>
				<p className={s.text}>{text}</p>
				<p className={s.description}>{description}</p>
			</div>
		</div>
	);
};
export default News;
