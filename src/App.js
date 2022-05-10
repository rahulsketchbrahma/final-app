import './App.css';
import Home from './Home';
import FrontPage from './FrontPage';
import Warning from './Warning';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Moviedetails from './Moviedetails';



function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Routes>
  <Route path="/" element={<FrontPage />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/Warning" element={<Warning />} />
  <Route path="/Moviedetails/:id" element={<Moviedetails />}/>
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;