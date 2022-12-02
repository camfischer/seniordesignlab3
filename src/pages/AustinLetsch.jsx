import Comments from '../components/UtteranceComments'
import Austin from './Austin.jpg'


function AustinLetsch(){
    return (<div style={{ textAlign: "center", color: 'black', backgroundColor: 'gold' }}>
            <img style={{width: 235, height: 220, border: '10px solid gold'}} src={Austin} alt="Austin" />
        <p></p>
        <p></p>
        <h1>Austin Letsch</h1>
        <p></p>
        <h2>About Me</h2>
        <h3>    I am currently attends the University of Iowa in my 4th year and final year </h3>
        <h3>as a Computer Science and Engineering major with a machine learning efa.</h3>
        <h3>I was born in Brooklyn Center (a subarb of Minneapolis) Minnesota.  I moved</h3>
        <h3>to West Des Moines when I was 10 and have stayed in Iowa since.  Outside of </h3>
        <h3>School I like to play tabletop games, espsially card games such as Magic: the Gathering.</h3>
        <h3>I have a Younger brother named Ethan and 2 dogs named Cosmo and Oreo.</h3>

        <h2>Contact Me</h2>
        <h3>phone: 515-777-0600</h3>
        <h3>email: aletsch@uiowa.edu</h3>
        <h3>Github: <a href="http://www.github.com/letschanator">letschanator</a> </h3>

        <div className='Comments'>
            <Comments />
        </div>
    
    </div>
            )
}

export default AustinLetsch;

