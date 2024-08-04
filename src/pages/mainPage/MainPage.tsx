import AnnouncementSection from '../../sections/announcementSection/AnnouncementSection';
import HeaderSection from '../../sections/headeingSection/HaederSection';
import Header from '../../components/header/Header';
import NewsSection from '../../sections/newsSection/NewsSection';
import s from './MainPage.module.css';

const MainPage = () => {
	return (
		<div className={s.mainPage}>
			<Header />
			<HeaderSection name={'Афиша'} />
			<NewsSection />
			<AnnouncementSection />
		</div>
	);
};

export default MainPage;
