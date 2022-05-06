import thisImage from './calculator.png';
import thisImage2 from './tipcalc.png';
import thisImage3 from './fylo.png';
import thisImage4 from './colorgen.png';
import thisImage5 from './tictactoe.png';

const Projects = () => {
    return ( 


        <div className="project-section">

          

          <h3>Personal Projects</h3>

           
          <div className="project-tile">

              <div className="each-tile">

                <img src={thisImage} alt="fire" className="dodo"/>

                <a href="https://calctheme.netlify.app"><div className="strip">Calculator created with vanilla javascript and css</div></a>

              </div>
              <div className="each-tile">
              <img src={thisImage2} alt="fire" className="dodo"/>
              <a href="https://tipcalculatorreact.netlify.app"><div className="strip">Tip calculator with react</div></a>
              </div>
              <div className="each-tile">
              <img src={thisImage3} alt="fire" className="dodo"/>

              <a href="https://fylofront.netlify.app"><div className="strip">Static site with html and css</div></a>
              </div>
              <div className="each-tile">
              <img src={thisImage4} alt="fire" className="dodo"/>

              <a href="https://colourgen.netlify.app"><div className="strip">Random-color generator</div></a>

              </div>
              <div className="each-tile">


              <img src={thisImage5} alt="fire" className="dodo"/>
              <a href="https://vanillatictactoe.netlify.app"><div className="strip">Two player tictactoe with vanilla javascript</div></a>
              </div>

          </div>


        </div>
     );
}
 
export default Projects;