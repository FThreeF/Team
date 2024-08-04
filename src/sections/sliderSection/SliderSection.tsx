import SliderItem from "../../components/sliderItem/SliderItem";
import s from "./SliderSection.module.css";
import sliderMain from "./images/slider__main-image.png"

const SliderSection = () => {
  return (
    <section className={s.sliderSection}>
      <div className={`${s.container} container`}>
        <img src={sliderMain} className={s.image} />
      <div className={s.sliderItemContainer}>

      <SliderItem image={""} text={"hhh"}/>
      <SliderItem image={""} text={"ggg"}/>
      </div>
      </div>
    </section>
  );
};
export default SliderSection;
