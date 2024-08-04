import s from './MainPage.module.css';
import AnnouncementSection from '../../sections/announcementSection/AnnouncementSection';
import NewsSection from '../../sections/newsSection/NewsSection';
import TitleSection from '../../sections/titleSection/TitleSection';

const MainPage = () => {
	return (
		<div className={s.mainPage}>
			<TitleSection name={'Афиша'} />
			<NewsSection />
			<AnnouncementSection />
		</div>
	);
};

export default MainPage;
