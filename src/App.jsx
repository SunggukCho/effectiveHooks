import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UseTabs from './routes/UseTabs';
import UseInput from './routes/UseInput';

function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/useTabs">UseTabs</Link>
            </li>
            <li>
              <Link to="/useInput">UseInput</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" />
          <Route path="/useTabs" element={ <UseTabs />} />
          <Route path="/useInput" element={ <UseInput /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
