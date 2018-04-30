
const initState = {
 latest: 'TESTER'
}
export default (state = initState, action) => {
switch(action.type) {
 case SET_DICE :
  return {state, latest: action.payload.latest}
 default :
  return state
 }
}
