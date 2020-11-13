import './App.css';
import Ar from "./Components/ar-js/arjs";
import Acc from "./Components/accordion/accordionn";
import Upload from "./Components/uploadFile/uploadConten";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
// import Home from "./Components/home/home";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">upload</Link>

            </li>
            <li>
              <Link to="/accordion">accordion</Link>
            </li>
            <li>
              <Link to="/ar">Ar conten</Link>
            </li>
          </ul>
        </nav>
        <Route path='/upload' exact component={Acc} />
        <Route path='/' exact component={Upload} />
        <Route path='/ar' exact component={Ar} />
      </div>
    </Router>
  );
}

export default App;
