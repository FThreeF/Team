import s from './AnnouncementItem.module.css';
interface IAnnouncementItem {
	number: string;
	month: string;
	text: string;
}
const AnnouncementItem = ({ number, month, text }: IAnnouncementItem) => {
	return (
		<div className={s.announcementItem}>
			<div className={s.date}>
				<p className={s.dateNumber}>{number}</p>
				<p className={s.dateMonth}>{month}</p>
			</div>
			<p className={s.text}>{text}</p>
		</div>
	);
};
export default AnnouncementItem;
