
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import routes from './config/routes';


function App() {


  return (
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
  );
}

export default App;
