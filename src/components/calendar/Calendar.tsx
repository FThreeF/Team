import CalendarWeek from "../calendarWeek/CalenderWeek";
import s from "./Calendar.module.css";

interface iCalendar {
  image: any;
  name: string;
  month: string;
}
const Calendar = (props: iCalendar) => {
  return (
    <div className={s.calendar}>
      <div className={s.imageWrap}>
        <img className={s.image} src={props.image} alt="" />
        <p className={s.name}>{props.name}</p>
      </div>
      <div className={s.container}>
        <div className={s.leftWrap}>
          <p className={s.month}>{props.month}</p>
          <div className={s.buttonContainer}>
            <button className={s.button}>&lt;</button>
            <button className={s.button}>&gt;</button>
          </div>
        </div>
        <div className={s.rightWrap}>
          <CalendarWeek className={s.border}></CalendarWeek>
          <CalendarWeek/>
          <CalendarWeek/>
          <CalendarWeek/>
          <CalendarWeek/>
        </div>
      </div>
    </div>
  );
};
export default Calendar;
