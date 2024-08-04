import s from './HeaderSection.module.css';
import image from './image/headingSection__icon.svg';

interface IHeaderSection {
	name: string;
}
const HeaderSection = (props: IHeaderSection) => {
	return (
		<div className={s.headerSection}>
			<div className={`${s.container} container`}>
				<h4 className={s.headerSectionTitle}>{props.name}</h4>
				<div className={s.headerSectionRight}>
					<img src={image} alt='' className={s.headerSectionIcon} />
					<p className={s.headerSectionText}>Все мероприятия</p>
				</div>
			</div>
		</div>
	);
};
export default HeaderSection;
