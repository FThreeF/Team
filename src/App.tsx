import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/style.css';
import MainPage from './pages/mainPage/MainPage';
import EventsPage from './pages/eventsPage/EventsPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import DetailsEventPage from './pages/detailsEventPage/DetailsEventPage';
import Error from './pages/errorPage/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <Error />
	},
  {
    path: 'events',
    element: <EventsPage />,
  },
  {
    path: 'contacts',
    element: <ContactsPage />,
  },
  {
    path: 'detailsEvent',
    element: <DetailsEventPage />,
  },
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
