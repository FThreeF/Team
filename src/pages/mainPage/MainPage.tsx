import s from './MainPage.module.css';
import AnnouncementSection from '../../sections/announcementSection/AnnouncementSection';
import NewsSection from '../../sections/newsSection/NewsSection';

const MainPage = () => {
	return (
		<div className={s.mainPage}>
			<NewsSection />
			<AnnouncementSection />
		</div>
	);
};

export default MainPage;
