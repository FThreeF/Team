import s from "./Order.module.css";
import time from "./images/time.svg";
import mus from "./images/style.svg";
import age from "./images/age.svg";
interface iOrder {
  order: {
    date: string;
    month: string;
    img: string;
    name: string;
    description: string;
    music: string;
    time: string;
    age: string;
  };
}
const Order = ({ order }: iOrder) => {
  return (
    <div className={s.order}>
      <div className={s.date}>
        <div className={s.numDate}>{order.date}</div>
        <div className={s.month}>{order.month}</div>
      </div>
      <img src={order.img} className={s.img} />
      <div className={s.wrap}>
        <p className={s.name}>{order.name}</p>
        <p className={s.description}>{order.description}</p>
        <div className={s.info}>
          {order.music ? (
            <div className={s.item}>
              <img src={mus} alt="" className={s.iconMusic} />
              <p className={s.textMusic}>{order.music}</p>
            </div>
          ) : null}
          {order.time ? (
            <div className={s.item}>
              <img src={time} alt="" className={s.iconTime} />
              <p className={s.textMusic}>{order.music}</p>
            </div>
          ) : null}
          {order.age ? (
            <div className={s.item}>
              <img src={age} alt="какойто текст" className={s.iconAge} />
              <p>{order.age}</p>
            </div>
          ) : null}
        </div>
      </div>
      <button className={s.button}>Заказать билет</button>
    </div>
  );
};
export default Order;
