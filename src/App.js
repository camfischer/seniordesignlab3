import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage"
import Portfoliopageone from "./pages/Portfoliopageone"


function App() {
  return (
    <BrowserRouter>
     <div className='HoldLinks'>
        <h1>Links</h1>
        <Link to="/">homepage</Link>
      </div>
    <div>
      <Link to="/portfoliopageone">portfoliopageone</Link>
    </div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/portfoliopageone" element={<Portfoliopageone/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
