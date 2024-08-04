import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/style.css';
import MainPage from './pages/mainPage/MainPage';
import EventsPage from './pages/eventsPage/EventsPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import DetailsEventPage from './pages/detailsEventPage/DetailsEventPage';
import Error from './pages/errorPage/Error';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <Error />,
	},
	{
		path: '/events',
		element: <EventsPage />,
	},
	{
		path: '/contacts',
		element: <ContactsPage />,
	},
	{
		path: '/detailsEvent',
		element: <DetailsEventPage />,
	},
]);

const App = () => {
	return (
		<>
			<Header />
			<main className='main'>
				<RouterProvider router={router} />
			</main>
			<Footer />
		</>
	);
};

export default App;
