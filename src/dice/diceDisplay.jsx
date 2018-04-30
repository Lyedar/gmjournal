

/*NOTE DiceDisplay is Fragile, Please be gentle
DiceDisplay is fragile and should only be touched when nessacary
So Please be careful when using/messing with anything in here
This component runs the diceParser on a incoming string and uses the given arrays to make a single display area,
with prop css
*/


/*
  TODO: Set history and latest to the parsed object from diceParser
  TODO: Build a history and latest view component
*/



//*************************************
//Imports
//*************************************
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './DiceDisplay.css'
import diceParser from './DiceRoller'
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



class DiceDisplay extends Component {

  constructor(props){
    super(props)
    this.state = {
      modal: 'Text',
      type: [],
      res: [],
      SHOW: ''
    }
  }

  //Props set to the sate after being run through the parser,
  //which creates two arrays
  componentDidMount(){

    //Set starting variables
    let parsed = diceParser('D6 + d6 + d12 - 5')
    var self = this
    let displayArr = []
    let total = 0

    displayArr = parsed.res.map((value, index)=>{
      //Set Loop Variables
      let diceType = parsed.type[index]
      let special = ''
      let DTDisplay = ''
      let symbol = ''
      //Checks if current element is a positive or negative element
      if(index) symbol = value>=0 ? <span key={`Addition ${value} ${diceType} ${index}`}> + </span> :<span key={`Subtraction ${value} ${diceType} ${index}`}> - </span>
      //Adds to total
      total = total + value
      //If the current check has a diceType, add it to the array with correct CSS for crits and fails
      if(diceType){
        DTDisplay = <span key={`d${diceType} ${index}`} className='type'>d{diceType}</span>
        if (diceType === value){
          special = 'crit'
        }
        if(value === 1){
          special = 'fum'
        }
      } //ends DiceType IF
      //Final Roll element with all calculated values and add it to the array
      let roll = <span key={`roll ${diceType} ${value} ${index}` } className={special}>{Math.abs(value)}</span>
      return <span key={`${diceType} ${value} ${Math.random()}`}>{symbol}<span onClick={()=> diceType ? self.reroll(index) : ''}>{DTDisplay}{roll}</span></span>
    })//Ends Map
    //Add total to the displayable array and return it to be displayed
    displayArr[displayArr.length]= <span key={'total'}>=<span  key={'innerTotal'} className='total'>{total}</span></span>
    this.props.newRoll(displayArr)
    this.setState({SHOW: displayArr})
  }


  //Allows for reroll only on dice elemnts (Sections with a D)
  //Rerolls the element and updates total as well
  reroll(position){
    console.log('REROLL BITCHES')
    let type = this.state.type
    let res = this.state.res
    let sign = res[position]>0 ? 1  : -1
    //  console.log('Math ', sign * Math.ceil( type[position]* Math.random() ))
    res[position] = sign * Math.ceil(type[position] * Math.random() )
    //  console.log('res ', res)
    this.setState({res:res})
  }

  //Meat of the Display component
  //Creates a display area with correct CSS from the two parsed arrays



  //Currently Renders the Array of elements created by VisibleArray
  //May render more in the future as more features are added
  render(){
    console.log('Latest ', this.props.latest)
    return(<div>

      {this.state.SHOW}
    </div>)}

}

//Define Incoming propTypes
//Dice: String example: '2D10 + 2' or 'D20 + 9'
//In future can take '2D10 + [Strength]' or something similiar


DiceDisplay.propTypes = {
  dice: PropTypes.string.isRequired
}

export default connect(MapStateToProps, MapDispatchToProps)(DiceDisplay);
