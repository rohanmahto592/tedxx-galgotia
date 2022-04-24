import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import About from "./component/aboutus/About";
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
import Speaker from './component/speakers/Speaker'
import Team from "./component/team/Team";
import Sponser from './component/sponser/Sponser'

function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route   exact path ='/' component={Home}></Route>
      <Route  exact path ='/abouts' component={About}></Route>
      <Route  exact path ='/speaker' component={Speaker}></Route>
      <Route exact path="/sponser" component={Sponser}></Route>

      <Route  exact path ='/team' component={Team}></Route>
      </Switch>
      {/* <Footer/> */}

      </BrowserRouter>
     
  );
}

export default App;
