import s from './HeaderSection.module.css';
import titleSectionImage from './image/titleSectionImage.svg';

const HeaderSection = ({ name }: { name: string }) => {
	return (
		<div className={s.headerSection}>
			<div className={`${s.container} container`}>
				<h4 className={s.headerSectionTitle}>{name}</h4>
				<div className={s.headerSectionRight}>
					<img src={titleSectionImage} alt='' className={s.headerSectionIcon} />
					<p className={s.headerSectionText}>Все мероприятия</p>
				</div>
			</div>
		</div>
	);
};
export default HeaderSection;
