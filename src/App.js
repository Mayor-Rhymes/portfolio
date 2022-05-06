import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import Mid from './mid';
import Projects from './projects';


const App = () => {
  return ( 


    <Router>

      <Routes>



        <Route path="/" element={<Nav />}/>


      </Routes>

      <Mid />
      <Projects />


    </Router>
   );
}
 
export default App;