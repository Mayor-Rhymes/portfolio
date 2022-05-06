import {Link} from 'react-router-dom';
import {FaTwitter} from 'react-icons/fa';
import {VscGithub} from 'react-icons/vsc';

const Nav = () => {
    return ( 


        <nav>


            <h3><Link to="/">Mayor Rhymes</Link></h3>


            <ul>


                {/* <li><Link to="https://www.dribbble.com">dribbble</Link></li> */}
                <li><a href="https://www.twitter.com/mayorx19"><FaTwitter /></a></li>
                <li><a href="https://www.github.com/mayor-rhymes"><VscGithub /></a></li>
            </ul>



            
        </nav>
     );
}
 
export default Nav;