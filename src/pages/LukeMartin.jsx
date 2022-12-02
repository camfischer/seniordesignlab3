import Comments from '../components/UtteranceComments'
import Luke from './Luke.png';


function LukeMartin(){
    return (
        <div style={{textAlign:"center", color: 'black', backgroundColor: 'gold'}}>
            <img style={{width: 235, height: 220, border: '10px solid gold'}} src={Luke} alt="Luke" />
            
            <h1>Luke Martin</h1>
            <p></p>
            <h2>About Me</h2>
            <h3>    Luke currently attends the University of Iowa and is in his 4th year </h3>
            <h3>as a Computer Science and Engineering major. He is originally from Sioux </h3>
            <h3>City, Iowa. Luke's hobby's outside of school are watching football, going</h3>
            <h3>to concerts, and eating large variety's of different foods. He is the    </h3>
            <h3>middle child of a family of five with an older sister and younger brother. </h3>
            <h3>Luke hopes to become a software developer after he graduates from Iowa. </h3>

            <h2>Contact Me</h2>
            <h4>phone: 712-281-4090</h4>
            <h4>email: lmartin9@uiowa.edu</h4>
            <h4>LinkedIn: <a href="https://www.linkedin.com/in/luke-martin-aab746197/">Luke-Martin</a> </h4>
            <h4>Github: <a href="https://github.com/lukemartin3">lukemartin3</a> </h4>

            <div className='Comments'>
                <Comments/>
            </div>
    </div>
    );}

export default LukeMartin;
