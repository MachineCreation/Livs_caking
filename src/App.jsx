

//modules
import { HashRouter, Routes, Route } from 'react-router-dom';

//components
import NavBar from './components/navBar';

//config
import routes from './config/routes';
import { CartProvider } from './config/CartContext';


function App() {


  return (
    <CartProvider>
      <HashRouter>
        <div id="overflow">
        <NavBar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </div>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
