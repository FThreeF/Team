import AnnouncementSection from "../../sections/announcementSection/AnnouncementSection";
import HeaderSection from "../../sections/headeingSection/HaederSection";
import Header from "../../components/header/Header";
import Order from "../../components/order/Order";
import s from "./MainPage.module.css";
import NewsSection from "../../sections/newsSection/NewsSection";
import SliderSection from "../../sections/sliderSection/SliderSection";


const MainPage = () => {
  const test = {
    date: "12",
    month: "[eq",
    img: "",
    name: "name",
    description: "des nsme",
    music: "top",
    time: "stop",
    age: "12",
  };
  return (
    <div className={s.mainPage}>
      {/* <Header /> */}
      <SliderSection />
      {/* <HeaderSection name={"Афиша"} />
      <NewsSection />
      <AnnouncementSection /> */}
    </div>
  );
};

export default MainPage;
