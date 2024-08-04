import s from './CalendarWeek.module.css';

const CalendarWeek = (props: any) => {
	return (
		<div className={s.calendarWeek}>
			<div className={`${s.block} ${props.className}`}>1</div>
			<div className={`${s.block} ${props.className} ${s.green}`}>2</div>
			<div className={`${s.block} ${props.className}`}>3</div>
			<div className={`${s.block} ${props.className}`}>4</div>
			<div className={`${s.block} ${props.className} ${s.green}`}>5</div>
			<div className={`${s.block} ${props.className}`}>6</div>
			<div className={`${s.block} ${props.className} ${s.green}`}>7</div>
		</div>
	);
};

export default CalendarWeek;
