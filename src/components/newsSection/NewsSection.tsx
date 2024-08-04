import Calendar from '../../components/calendar/Calendar';
import News from '../../components/news/News';
import s from './NewsSection.module.css';
import newsImage1 from './image/newsImage1.png';
import newsImage2 from './image/newsImage2.png';
import calendarImage from './image/calendarImage.png';

const NewsSection = () => {
	return (
		<section className={s.newsSection}>
			<div className={`${s.container} container`}>
				<div className={s.block}>
					<h3 className={s.title}>Новости</h3>
					<div className={s.group}>
						<News
							image={newsImage1}
							text={'Переносы / Отмена мероприятий'}
							description={'11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.'}
						/>
						<News
							image={newsImage2}
							text={'Переносы / Отмена мероприятий'}
							description={'11.04.2023 г. в 19.00 час. — концерт «Опера vs. Оперетта» - ПЕРЕНОС на 05.06.2023 г. в 19.00 час.'}
						/>
					</div>
				</div>
				<Calendar image={calendarImage} name={'Обзорные экскурсии'} month={'Июль'} />
			</div>
		</section>
	);
};

export default NewsSection;
