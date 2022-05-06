import avatar from './Group 5.png';
import floater from './Ellipse 5.png';

const Mid = () => {
    return ( 
    
    
    <div className="mid">


        <img src={floater} alt="floater" className="floater"/>
        <div className="first-section">


           <p>
               I am a Learning Full-Stack Developer with a great <br />
               understanding of web development technologies.
           </p>


          <div className="technology">
            <h4>Front-End Technologies</h4>

            <p>

            HTML, CSS, VANILLA JAVASCRIPT, 
            TAILWIND, REACT, FLUTTER, QT
            
            
            </p>



          </div>

          <div className="technology">
            <h4>Back-End Technologies</h4>

            <p>

            SPRING, EXPRESS, DJANGO, FLASK, AQUEDUCT,
            mySQL
            
            
            </p>



          </div>




        </div>

        <div className="second-section">


              
         <img src={avatar} alt="imog" className="imog"/>

        </div>
    </div> 
    
    
    
    
    
    );
}
 
export default Mid;