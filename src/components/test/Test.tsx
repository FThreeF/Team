import AnnouncementItem from "../announcementItem/AnnouncementItem";
import Calendar from "../calendar/Calendar";
import HeaderSection from "../headeing-section/HaederSection";
import News from "../news/News";
import Order from "../order/Order";


const Test = () => {
  return (
    <>
      <Calendar image ="" name="test text" month='Февраль'></Calendar>
      <News image='' text="test test test test test test test test " description='test test test test test test test test  '></News>
      <AnnouncementItem number='3' month="июня" text='test' ></AnnouncementItem>
      <HeaderSection name = "Афиша"></HeaderSection>
      <Order date = "12" month="fg,fld" img = "null" name = "test" description ="test des" music ="test mus" time = "19 00" age = "6+"/>
    </>
  )
}

export default Test;