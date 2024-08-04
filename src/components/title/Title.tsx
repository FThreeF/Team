import s from './Title.module.css';
import titleImage from './image/titleImage.svg';

const Title = ({ name }: { name: string }) => {
	return (
		<div className={s.title}>
				<h4 className={s.header}>{name}</h4>
				<div className={s.right}>
					<img src={titleImage} className={s.headerSectionIcon} />
					<p className={s.text}>Все мероприятия</p>
				</div>
		</div>
	);
};
export default Title;
