import Comments from '../components/UtteranceComments'
import Herky from './Herky.png';
import {Link} from 'react-router-dom'

function Homepage(){
    return (
        <div style={{textAlign:"center", color:"gold", backgroundColor:"black", }}>
            <img style={{width: 400, height: 250}} src={Herky} alt="Herky" />
            <h1>Welcome!</h1>
            <div style={{display: 'flex', justifyContent: 'space-evenly' }}>
                <a><Link to="/CameronFischer" style={{color: 'Black', textDecoration: 'none', fontSize: 20, backgroundColor: 'yellow', borderRadius: 5, padding: 4}}>Cameron Fischer</Link></a>
                <a><Link to="/LukeMartin"style={{color: 'Black', textDecoration: 'none', fontSize: 20, backgroundColor: 'yellow', borderRadius: 5, padding: 4}}>Luke Martin</Link></a>
                <a><Link to="/AustinLetsch"style={{color: 'Black', textDecoration: 'none', fontSize: 20, backgroundColor: 'yellow', borderRadius: 5, padding: 4}}>Austin Letsch</Link></a>
                <a><Link to="/BeckyRicke"style={{color: 'Black', textDecoration: 'none', fontSize: 20, backgroundColor: 'yellow', borderRadius: 5, padding: 4}}>Becky Ricke</Link></a>
            </div>
            <div className='Comments' style={{verticalAlign:'bottom', flexShrink: 0}}>
        <Comments/>   
        </div>
    </div>
    );
}

export default Homepage;