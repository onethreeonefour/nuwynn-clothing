import Landing from './Components/Landing/Landing';
import NavBar from './Components/Navigation/Navbar';
import Footer from './Components/Navigation/Footer';
import WomenStore from './Components/Women/WomenStore';
import MenStore from './Components/Men/MenStore';
import './Style.scss';
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/men" component={MenStore} />
        <Route exact path="/women" component={WomenStore} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
