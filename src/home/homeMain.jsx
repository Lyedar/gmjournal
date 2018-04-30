import React, { Component } from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux'

//components
import Emoji from '../Emoji';

//styles
import '../App.scss';
import '../App.less';
import '../App.styl';

//modules
//import cssStyles from './First.module.css';
//import sassStyles from './Second.module.scss';
//import lessStyles from './Third.module.less';
import stylusStyles from '../Fourth.module.styl';


const MapStateToProps = (state) => ({

})

const MapDispatchToProps = (dispatch) => ({
  DicePage : () => dispatch()
})

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className={stylusStyles.header}>
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="App-title">
              <Emoji label="danger" emoji="☢" />
              <span> custom-react-scripts </span>
              <Emoji label="danger" emoji="☢" />
            </h2>
            <div className="App-subtitle">
              allow custom config for create-react-app without ejecting
            </div>
            <button>Hello</button>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);
