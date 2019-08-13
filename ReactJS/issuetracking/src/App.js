import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import './index.css';
import IssueList from './issue/IssueList';
import { Switch, Route, hashHistory } from 'react-router';
import IssueEdit from './issue/IssueEdit';
import Header from './components/header';
import Auth from './authentication/Auth';
import Callback from './authentication/callback';

// import IssueFilter from './issue/IssueFilter';
const auth=new Auth();
class App extends Component {

  render() {
    const NoMatch = () =><p>Page Not Found</p>;
    const RoutedApp = () => (
      // <Router history={hashHistory} >
      <div>
        <Route path="/issues" component={IssueList} />
        <Route path="/callback" component={Callback} />
        <Route path="/issueEdit/:id" component={IssueEdit} />
        <Route path="*" component={NoMatch} />
        </div>
      // </Router>
    );
    return ( 
      <div>
        <button onClick={auth.login} > login </button>
        <Header/>
        <RoutedApp/>
      </div>
    );
  }
}

export default App;