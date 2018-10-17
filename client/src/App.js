import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./Rover.scss";
import Home from './pages/Home'; //???
import About from './pages/About'; //???
import Error from './pages/Error'; //???
import SignUp from './pages/SignUp'; //???
import Login from './pages/Login'; //???
import Search from './pages/Search'; //???
import API from './utils/API'; //???
import ThankYouForRegistering from './pages/ThankYouForRegistering';
import NavBar from './NavBar';

class App extends Component {
  state = {
    email: ""
  }
  componentDidMount = () => {
    API.getEmail()
    .then( response => {
      console.log(response.data.email);
      this.setState({
        email: response.data.email
      });
    });
  }
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar email={this.state.email} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/thank-you" component={ThankYouForRegistering} />
            <Route exact path="/search/:term" component={Search} />
            <Route component={Error} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
