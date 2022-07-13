import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UseTabs from './routes/UseTabs';
import UseInput from './routes/UseInput';
import UseTitle from './routes/UseTitle';
import UseConfirm from './routes/UseConfirm';
import UseBeforeLeave from './routes/UseBeforeLeave';

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
            <li>
              <Link to="/useTitle">UseTitle</Link>
            </li>
            <li>
              <Link to="/useConfirm">UseConfirm</Link>
            </li>
            <li>
              <Link to="/useBeforeLeave">UseBeforeLeave</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" />
          <Route path="/useTabs" element={ <UseTabs />} />
          <Route path="/useInput" element={ <UseInput /> } />
          <Route path="/useTitle" element={ <UseTitle /> } />
          <Route path="/useConfirm" element={ <UseConfirm /> } />
          <Route path="/useBeforeLeave" element={ <UseBeforeLeave /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
