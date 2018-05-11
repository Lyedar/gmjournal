//***************************************
//            DICE REDUCER
// Initial State, Reducer
// Initial State: For Dice Section Only
// Reducer: Dice Section Only
//***************************************

//*************************************
//IMPORTS
//*************************************

import diceParser from './DiceRoller'

//*************************************
//INITIALSTATE
//*************************************

const initState = {
 latest: [],
 history: [],

}


//*************************************
//REDUCER
//*************************************

export default (state = initState, action) => {
switch(action.type) {
 case 'NEW_ROLL' :
  let parsed = diceParser(action.payload.latest)
  let newHistory = state.history
  newHistory.unshift(state.latest)
  return {state, latest: parsed, history: newHistory}
 default :
  return state
 }
}
