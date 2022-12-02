import {HashRouter, Link, Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage"
import CameronFischer from "./pages/CameronFischer"
import LukeMartin from "./pages/LukeMartin"

import AustinLetsch from "./pages/AustinLetsch" 
import BeckyRicke from "./pages/BeckyRicke"
import TeamIntro from "./pages/TeamIntro"


function App() {
  return (
    <div style={{backgroundColor: 'grey', height: '100vh'}}>
      <HashRouter>
        <div className='HoldLinks'>
          <h1 style={{textAlign:"center", color: 'gold', margin:0}}>Team 8</h1>
        </div>
          <div style={{display: 'flex', justifyContent: 'space-evenly' }}>
          <Link to="/" style={{color: 'white', textDecoration: 'none', fontSize: 20, }}>Home</Link>
          <Link to="/TeamIntro" style={{color: 'white', textDecoration: 'none', fontSize: 20}}>Team Introduction</Link>
          <Link to="/CameronFischer" style={{color: 'white', textDecoration: 'none', fontSize: 20}}>Cameron Fischer</Link>
          <Link to="/LukeMartin" style={{color: 'white', textDecoration: 'none', fontSize: 20}} >Luke Martin</Link>
          <Link to="/AustinLetsch"style={{color: 'white', textDecoration: 'none', fontSize: 20}} >Austin Letsch</Link>
          <Link to="/BeckyRicke"style={{color: 'white', textDecoration: 'none', fontSize: 20}}>Becky Ricke</Link>
          </div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/TeamIntro" element={<TeamIntro/>}/>
          <Route path="/CameronFischer" element={<CameronFischer/>}/>
          <Route path="/LukeMartin" element={<LukeMartin/>}/>

          <Route path="/AustinLetsch" element={<AustinLetsch/>}/>
          <Route path="/BeckyRicke" element={<BeckyRicke/>}/>

        </Routes>
      </HashRouter>
    </div>
    
    
  );
}
//npm install react-router-dom
export default App;
