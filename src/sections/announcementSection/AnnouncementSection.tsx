import AnnouncementItem from '../../components/announcementItem/AnnouncementItem';
import Title from '../../components/title/Title';
import s from './AnnouncementSection.module.css';

const AnnouncementSection = () => {
	return (
		<section className={s.announcementSection}>
			<div className={`${s.container} container`}>
				<Title name={'Краткие анонсы'} />
				<div className={s.group}>
					<AnnouncementItem number={'3'} month={'июня'} text={'«ВЕК имени СИНАТРЫ»'} />
					<AnnouncementItem number={'3'} month={'июня'} text={'«ВЕК имени СИНАТРЫ»'} />
					<AnnouncementItem number={'3'} month={'июня'} text={'«ВЕК имени СИНАТРЫ»'} />
					<AnnouncementItem number={'3'} month={'июня'} text={'«ВЕК имени СИНАТРЫ»'} />
				</div>
			</div>
		</section>
	);
};

export default AnnouncementSection;
