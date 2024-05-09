
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import routes from './config/routes';


function App() {


  return (
      <HashRouter>

        <NavBar />
        <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>

      </HashRouter>
  );
}

export default App;
