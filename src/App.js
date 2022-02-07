import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {routerConfig} from "./pages/routerConfig";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              {
                routerConfig.map((route, index) => (<li key={route.path}>
                  <Link to={route.path}>
                    {route.name}
                  </Link>
                </li>))
              }
            </ul>
          </nav>
        </header>
        <main>

          <Routes>
            {
              routerConfig.map((route, index) => (
                <Route {...route} key={route.path}/>))
            }
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;