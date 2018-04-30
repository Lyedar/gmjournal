//***************************************
//            DICE ACTIONS
// Actions: For the Dice Componenet
//***************************************

export const newRoll = (latest) => {
  return (dispatch, getstate) => {
    dispatch({
       type: 'NEW_ROLL',
       payload: {
        latest
       }
    })
  }
}
