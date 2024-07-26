import AnnouncementItem from '../announcementItem/AnnouncementItem';
import HeaderSection from '../headeing-section/HaederSection';
import s from './AnnouncementSection.module.css';

const AnnouncementSection = () => {
	return (
		<section className={s.announcementSection}>
			<HeaderSection name={'Краткие анонсы'} />
			<div className={`${s.container} container`}>
				<AnnouncementItem number={'3'} month={'июня'} text={'«ВЕК имени СИНАТРЫ»'} />
				<AnnouncementItem number={'3'} month={'июня'} text={'«ВЕК имени СИНАТРЫ»'} />
				<AnnouncementItem number={'3'} month={'июня'} text={'«ВЕК имени СИНАТРЫ»'} />
				<AnnouncementItem number={'3'} month={'июня'} text={'«ВЕК имени СИНАТРЫ»'} />
			</div>
		</section>
	);
};

export default AnnouncementSection;
