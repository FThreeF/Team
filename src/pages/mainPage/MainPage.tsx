import AnnouncementSection from '../../components/announcementSection/AnnouncementSection';
import HeaderSection from '../../components/headeing-section/HaederSection';
import Header from '../../components/header/Header';
import NewsSection from '../../components/newsSection/NewsSection';
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
