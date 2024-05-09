// Import the page components
import landing_page from '../pages/landing_page';
import SpecialtyCakes from '../pages/Specialty_cakes';
import Cart from '../pages/cart';
import BuildYourOwn from '../pages/byoc';
import Contact from '../pages/contact';
import Gallery from '../pages/gallery';
import not_found from '../components/not_found';

// Define the routes array
const routes = [
    {
        path: "/",
        component: landing_page,
    },
    {
        path: "/specialty-cakes",
        component: SpecialtyCakes,
    },
    {
        path: "/cart",
        component: Cart,
    },
    {
        path: "/Build-your-own",
        component: BuildYourOwn,
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
        component: not_found,
    },
];

// Export the routes array
export default routes;