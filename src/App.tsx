import './assets/styles/style.css';
import Order from "./components/order/Order.tsx"
import HeaderSection from "./components/headeing-section/HaederSection.tsx"
import AnnouncementItem from './components/announcementItem/AnnouncementItem.tsx';
import News from './components/news/News.tsx';
import Calendar from './components/calendar/Calendar.tsx';

const App = () => {
  return (
    <>
      <Calendar image ="" name="test text" month='Февраль'></Calendar>
      {/* <News image='' text="test test test test test test test test " description='test test test test test test test test  '></News>
      <AnnouncementItem number='3' month="июня" text='test' ></AnnouncementItem>
      <HeaderSection name = "Афиша"></HeaderSection>
      <Order date = "12" month="fg,fld" img = "null" name = "test" description ="test des" music ="test mus" time = "19 00" age = "6+"/> */}
    </>
  )
}

export default App;