// Import the page components
import landing_page from '../pages/landing_page';
import Cart from '../pages/cart';
import Contact from '../pages/contact';
import Gallery from '../pages/gallery';
import Menu from '../pages/menu';
import not_found from '../components/not_found';
import { HashLink } from 'react-router-hash-link';

// Define the routes array
const routes = [
    {
        path: "/",
        component: landing_page,
    },
    {
        path: "/cart",
        component: Cart,
    },
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/gallery",
        component: Gallery,
    },
    {
        path: "/menu",
        component: Menu
    },
    {
        component: not_found,
    },
];

// Export the routes array
export default routes;