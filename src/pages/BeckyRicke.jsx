import Comments from '../components/UtteranceComments'
import Rebecca from './Rebecca.png';


function BeckyRicke(){
    return(
        <div style={{textAlign:"center", color: 'black', backgroundColor: 'gold'}}>
            <img style={{width: 235, height:220, border: '10px solid gold'}} src={Rebecca} alt="Rebecca" />
                
            <h1>Becky Ricke</h1>
            <p></p>
            <h2>About Me</h2>
            <h3>    Rebecca is a student at the University of Iowa College of Engineering. She is </h3>
            <h3>in the fourth year of her degree in Computer Science and Engineering, while also </h3>
            <h3>pursuing a Pre-Law Degree Designation. Rebecca grew up in Sioux City, Iowa with </h3>
            <h3>her parents and two older sisters, Jacquelyn and Alexis. In her free time, Rebecca </h3>
            <h3>enjoys spending time with her roommates and friends, watching movies, and cooking. </h3>
            <h3>Rebecca plans to go to Law School after college and work in Intellectual Property Law. </h3>

            <h2>Contact Me</h2>
            <h4>phone: 712-898-7799</h4>
            <h4>email: rebecca-ricke@uiowa.edu</h4>
            <h4>LinkedIn: <a href="https://www.linkedin.com/in/rebecca-ricke/">Becky Ricke</a> </h4>
            <h4>GitHub: <a href="https://github.com/rebeccaricke">rebeccaricke</a> </h4>

            <div className='Comments'>
                <Comments/>
            </div>
        </div>
);}

export default BeckyRicke;
