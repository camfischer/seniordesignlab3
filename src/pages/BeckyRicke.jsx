import Comments from '../components/UtteranceComments'

function BeckyRicke(){
    return(
    <div style={{textAlign:"center", color: 'black', backgroundColor: 'gold'}}>
            <h1>Becky Ricke</h1>
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
            <h4>LinkedIn: </h4> <a href="https://www.linkedin.com/in/rebecca-ricke/">Becky Ricke</a>


            <div className='Comments'>
                <Comments/>
            </div>
        </div>
);}

export default BeckyRicke;
