import './App.css';
import Home from './Home';
import FrontPage from './FrontPage';
import Warning from './Warning';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Routes>
  <Route path="/" element={<FrontPage />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/Warning" element={<Warning />} />
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;