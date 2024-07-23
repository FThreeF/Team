import s from "./announcementItem.module.css"
interface IAnnouncementItem {
    number:string;
    month:string;
    text:string;
}
const AnnouncementItem = (props:IAnnouncementItem) => {
 return(
    <div className={s.announcementItem}>
        <div className={s.date}>
            <p className={s.dateNumber}>{props.number}</p>
            <p className= {s.dateMonth}>{props.month}</p>
        </div>
        <p className={s.text}>{props.text}</p>
    </div>
 )
}
export default AnnouncementItem