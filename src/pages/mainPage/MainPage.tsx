import s from './MainPage.module.css';
import AnnouncementSection from '../../sections/announcementSection/AnnouncementSection';
import NewsSection from '../../sections/newsSection/NewsSection';
import TitleSection from '../../components/title/Title';

const MainPage = () => {
	return (
		<div className={s.mainPage}>
			<NewsSection />
			<AnnouncementSection />
		</div>
	);
};

export default MainPage;
