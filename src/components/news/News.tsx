import s from "./news.module.css"
interface INews {
image:any;
text:string;
description:string;
}
const News = (props:INews) => {
    return(
        <div className={s.news}>
            <img src={props.image} alt="" className={s.image} />
            <div className={s.textWrapper}>
                <p className={s.text}>{props.text}</p>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    )
}
export default News