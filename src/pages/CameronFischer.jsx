import Comments from '../components/UtteranceComments'

function CameronFischer(){
    return (
        <div style={{textAlign:"center", color: 'black', backgroundColor: 'gold'}}>
            <h1>Cameron Fischer</h1>
            <p></p>
            <h2>About Me</h2>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>

            <h2>Contact Me</h2>
            <h4>phone: </h4>
            <h4>email: </h4>
            <h4>LinkedIn: </h4> <a href="">Cameron Fischer</a>


            <div className='Comments'>
                <Comments/>
            </div>
        </div>
        );
}

export default CameronFischer;
