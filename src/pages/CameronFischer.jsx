import Comments from '../components/UtteranceComments'
import CameronPicture from './Cam.png'
function CameronFischer(){
    return (
        <div style={{textAlign:"center", color: 'black', backgroundColor: 'gold'}}>
            <img style={{width: 231.5, height: 400, border: '1px solid black'}} src={CameronPicture}/>a
            <h1>Cameron Fischer</h1>
            <p></p>
            <h2>About Me</h2>
            <h3>I'm from Davenport, Iowa. Currently majoring in Computer Science and Engineering with a focus in Software Engineering. I plan to work in the .NET environment with a focus on backend
                development. In my freetime I like to play soccer, video games, and go to the gym. 
            </h3>
            <h2>Contact Me</h2>
            <h4>email: cameron-fischer@uiowa.edu </h4>
            <h4>LinkedIn: <a href="https://www.linkedin.com/in/cameron-fischer-5a7882221/">LinkedIn</a> </h4> 
            <h4>GitHub: <a href="https://github.com/camfischer">GitHub</a> </h4> 


            <div className='Comments'>
                <Comments/>
            </div>
        </div>
        );
}

export default CameronFischer;
