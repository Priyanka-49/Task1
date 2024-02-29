import Headertask from './Headertask';
import Abouttask from './Abouttask';
import Contact from './contact';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./index.js";
import HomePage from './HomePage.js';
// import Footertask from './Footertask.js';


function Routertask(){
return(
    <Router>
            <Headertask/>
            <Routes>
                <Route path = "/HomePage" element = {<HomePage/>}/>
                <Route path = "/Abouttask" element = {<Abouttask/>}/>
                <Route path = "/Contact" element = {<Contact/>}/>  

            </Routes>
    </Router>
    )
    };

export default Routertask;