import Calendar from '../calendar/Calendar';
import News from '../news/News';
import s from './NewsSection.module.css';
import newsImage1 from './newsImage1.png';
import newsImage2 from './newsImage2.png';
import calendarImage from './calendarImage.png';

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
