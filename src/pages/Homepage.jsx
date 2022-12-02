import Comments from '../components/UtteranceComments'

function Homepage(){
    return (
     <div style={{textAlign:"center", color:"gold", backgroundColor:"black"}}>
        <h1>Welcome!</h1>
    
    <div className='Comments'>
        <Comments/>
    </div>
    </div>
    );
}

export default Homepage;