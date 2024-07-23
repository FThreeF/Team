import s from "./calendar.module.css";

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
            <button className={s.button}>
                <div className={s.inButton}></div>
            </button>
            <button className={s.button}>
                <div className={s.inButton}></div>
            </button>
            
          </div>
        </div>
        <div className={s.rightWrap}>
          <div className={s.block}>1</div>
          <div className={`${s.block} ${s.green}`}>2</div>
          <div className={s.block}>3</div>
          <div className={s.block}>4</div>
          <div className={`${s.block} ${s.green}`}>5</div>
          <div className={s.block}>6</div>
          <div className={`${s.block} ${s.green}`}>7</div>
          <div className={s.block}>1</div>
          <div className={`${s.block} ${s.green}`}>2</div>
          <div className={s.block}>3</div>
          <div className={s.block}>4</div>
          <div className={`${s.block} ${s.green}`}>5</div>
          <div className={s.block}>6</div>
          <div className={`${s.block} ${s.green}`}>7</div>
          <div className={s.block}>1</div>
          <div className={`${s.block} ${s.green}`}>2</div>
          <div className={s.block}>3</div>
          <div className={s.block}>4</div>
          <div className={`${s.block} ${s.green}`}>5</div>
          <div className={s.block}>6</div>
          <div className={`${s.block} ${s.green}`}>7</div>
          <div className={s.block}>1</div>
          <div className={`${s.block} ${s.green}`}>2</div>
          <div className={s.block}>3</div>
          <div className={s.block}>4</div>
          <div className={`${s.block} ${s.green}`}>5</div>
          <div className={s.block}>6</div>
          <div className={`${s.block} ${s.green}`}>7</div>
          <div className={s.block}>1</div>
          <div className={`${s.block} ${s.green}`}>2</div>
          <div className={s.block}>3</div>
          <div className={s.block}>4</div>
          <div className={`${s.block} ${s.green}`}>5</div>
          <div className={s.block}>6</div>
          <div className={`${s.block} ${s.green}`}>7</div>
    
        </div>
      </div>
    </div>
  );
};
export default Calendar;
