import s from "./Order.module.css";
import time from "./images/time.svg";
import mus from "./images/style.svg";
import age from "./images/age.svg";
interface iOrder {
  date: string;
  month: string;
  img: string;
  name: string;
  description: string;
  music: string;
  time: string;
  age: string;
}
const Order = (props: iOrder) => {
  return (
    <div className={s.order}>
      <div className={s.date}>
        <div className={s.numDate}>{props.date}</div>
        <div className={s.month}>{props.month}</div>
      </div>
      <img src={props.img} className={s.img} />
      <div className={s.wrap}>
        <p className={s.name}>{props.name}</p>
        <p className={s.description}>{props.description}</p>
        <div className={s.info}>
          {props.music ? (
            <div className={s.item}>
              <img src={mus} alt="" className={s.iconMusic} />
              <p className={s.textMusic}>{props.music}</p>
            </div>
          ) : null}
          {props.time ? (
            <div className={s.item}>
              <img src={time} alt="" className={s.iconTime} />
              <p className={s.textMusic}>{props.music}</p>
            </div>
          ) : null}
          {props.age ? (
            <div className={s.item}>
              <img src={age} alt="какойто текст" className={s.iconAge} />
              <p>{props.age}</p>
            </div>
          ) : null}
        </div>
      </div>
      <button className={s.button}>Заказать билет</button>
    </div>
  );
};
export default Order;
