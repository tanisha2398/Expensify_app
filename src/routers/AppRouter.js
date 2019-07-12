import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">
      Portfolio
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
  </div>
);
const Home = () => (
  <div>
    <h1>Welcome</h1>
    <p>This is my site. Take a LOOK Around!</p>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact Me</h1>
    <p>You can reach me at tanisha@gmail.com</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    <h1>404 not found </h1>
  </div>
);
const Portfolio = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the following thing i have done</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item One</Link>
  </div>
);

const PortfolioId = props => {
  return (
    <div>
      <h1>A things I've done</h1>
      <p>THis page is for the item with id of {props.match.params.id} </p>
    </div>
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio/:id" component={PortfolioId} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AppRouter;
