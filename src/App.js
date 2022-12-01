import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage"
import CameronFischer from "./pages/CameronFischer"
import LukeMartin from "./pages/LukeMartin"
<<<<<<< HEAD
import AustinLetsch from "./pages/AustinLetsch" 
import BeckyRicke from "./pages/BeckyRicke"
=======
import AustinLetsch from "./pages/AustinLetsch"
>>>>>>> c25c2dfce4fc56f7e27b0775a33b17db557ee800


function App() {
  return (
    <BrowserRouter>
     <div className='HoldLinks'>
        <h1>Links</h1>
        <Link to="/">Home</Link>
      </div>
    <div>
      <Link to="/CameronFischer">Cameron Fischer</Link>
    </div>
    <div>
      <Link to="/LukeMartin">Luke Martin</Link>
    </div>
    <div>
      <Link to="/AustinLetsch">Austin Letsch</Link>
    </div>
<<<<<<< HEAD
    <div>
      <Link to="/BeckyRicke">Becky Ricke</Link>
    </div>
=======
>>>>>>> c25c2dfce4fc56f7e27b0775a33b17db557ee800
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/CameronFischer" element={<CameronFischer/>}/>
        <Route path="/LukeMartin" element={<LukeMartin/>}/>
<<<<<<< HEAD
        <Route path="/AustinLetsch" element={<AustinLetsch/>}/>
        <Route path="/BeckyRicke" element={<BeckyRicke/>}/>
=======
        <Route path="/AustinLetsch" element={<AustinLetsch/>}></Route>
>>>>>>> c25c2dfce4fc56f7e27b0775a33b17db557ee800
      </Routes>
    </BrowserRouter>
  );
}
//npm install react-router-dom
export default App;
