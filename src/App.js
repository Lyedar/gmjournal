import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';

//components
import Emoji from './Emoji';

//styles
import './App.scss';
import './App.less';
import './App.styl';

//modules
//import cssStyles from './First.module.css';
//import sassStyles from './Second.module.scss';
//import lessStyles from './Third.module.less';
import stylusStyles from './Fourth.module.styl';
import HomeMain from './home/homeMain'
import DiceMain from './dice/diceMain';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to='/'>HOME</Link>
          {' '}
          <Link to='dice'>DICE</Link>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={HomeMain} />
            <Route exact path="/dice" component={DiceMain} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
