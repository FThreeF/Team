import SliderItem from "../../components/sliderItem/SliderItem";
import s from "./SliderSection.module.css";
import sliderMain from "./images/slider__main-image.png"
import slider1 from "./images/thumb-slider__image (1).png"
const SliderSection = () => {
  return (
    <section className={s.sliderSection}>
      <div className={`${s.container} container`}>
        <img src={sliderMain} className={s.image} />
      <div className={s.sliderItemContainer}>

      <SliderItem image={slider1} text={"hhh"}/>
      <SliderItem image={""} text={"ggg"}/>
      </div>
      </div>
    </section>
  );
};
export default SliderSection;
