import Comments from '../components/UtteranceComments'
import Herky from './Herky.png';

function Homepage(){
    return (
     <div style={{textAlign:"center", color:"gold", backgroundColor:"black"}}>
        <img style={{width: 400, height: 250}} src={Herky} alt="Herky" />
        <h1>Welcome!</h1>
    
    <div className='Comments'>
        <Comments/>
    </div>
    </div>
    );
}

export default Homepage;