
import s from "./SliderItem.module.css"

const SliderItem = (props: { image: string, text: string }) => {
    return(
        <div className={s.sliderItem}>
            <img src={props.image} className={s.image} />
            <p className={s.sliderText}>{props.text}</p>
        </div>
    )
}
export default SliderItem