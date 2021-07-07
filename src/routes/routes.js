import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home"
import Autor from "../pages/Autor";
import Team from "../pages/Team";


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"  component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/equipe"  component={Team} />
        </Switch>
        <Switch>
          <Route exact path="/autora"  component={Autor} />
        </Switch>
      </BrowserRouter>
    )

}

export default Routes
