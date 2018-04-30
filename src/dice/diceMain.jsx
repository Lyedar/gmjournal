//***************************************
//            DiceMain
// State and Reducer: Dice
// InitialState = {
//  latest: [],
//  history: [],
// }
//
//***************************************


//*************************************
//Imports
//*************************************
import React from 'react';
import { connect } from 'react-redux'
import DiceDisplay from './diceDisplay'
//Action Imports
import {
  newRoll
} from './diceActions'

//*************************************
//Setup Props
//*************************************

//State
const MapStateToProps = (state, ownProps) => ({
  latest: state.dice.latest
})

//Dispatch
const MapDispatchToProps = (dispatch) => ({
  newRoll: (value) => dispatch(newRoll(value))
})


//*************************************
//Class DiceMain
//*************************************
class diceMain extends React.Component {

componentDidMount(){
  this.props.newRoll('D20+5')
}

 render () {
   return (
     <div>
       <br/>
       <DiceDisplay dice={}/>
       {this.props.latest.res }
     </div>
   )
 }
}

export default connect(MapStateToProps, MapDispatchToProps)(diceMain);
