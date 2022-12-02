import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage"
import CameronFischer from "./pages/CameronFischer"
import LukeMartin from "./pages/LukeMartin"

import AustinLetsch from "./pages/AustinLetsch" 
import BeckyRicke from "./pages/BeckyRicke"
import TeamIntro from "./pages/TeamIntro"


function App() {
  return (

    <div style={{backgroundColor: 'grey'}}>
      <BrowserRouter>
        <div className='HoldLinks'>
          <h3>Links <h1 style={{textAlign:"center", color: 'gold'}}>Team 8</h1>  </h3> 
          <Link to="/">Home</Link>
        </div>
    
        <div>
          <Link to="/TeamIntro">Team Introduction</Link>
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
    
        <div>
          <Link to="/BeckyRicke">Becky Ricke</Link>
        </div>

        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/TeamIntro" element={<TeamIntro/>}/>
          <Route path="/CameronFischer" element={<CameronFischer/>}/>
          <Route path="/LukeMartin" element={<LukeMartin/>}/>

          <Route path="/AustinLetsch" element={<AustinLetsch/>}/>
          <Route path="/BeckyRicke" element={<BeckyRicke/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    
    
  );
}
//npm install react-router-dom
export default App;
