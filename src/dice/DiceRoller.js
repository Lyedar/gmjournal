//*****************************************
//                diceParser
//  This function takes a string input
//       example: '2D10 + 5'
// Will return two arrays:
// res : array of the rolled values
// type: the type of die rolled
// Array positions match up in each array
//*****************************************

//NOTE: Also Fragile, please be gentle

function diceParser(statement) {
  var str = statement
  str = str.replace(/- */,'+ -') //removes - and replaces it with a + -
  str = str.replace(/D/,'d') //Replaces D with d
  var re = / *\+ */ //Finds all '+' with spaces in front or behind
  var items = str.split(re) //splits strings by re

  // Setup arrays for return
  var res = []
  var type = []

  //Runs through array items to create the res and type array
  //TODO: Document fully (Austin needs to run through the specifics again on how this works)

  for(var i=0; i<items.length; i++ ){
    var match = items[i].match(/^[ \t]*(-)?(\d+)?(?:(d)(\d+))?[ \t]*$/)
    if (match){
      var sign = match[1]?-1:1 //Are we dealing with a negative?

      var num = parseInt( match[2] || '1', 10)  //turn num from a string to a number
      var max = parseInt( match[4] || '0', 10) //turn max into a string

      if(match[3]){ //If there needs to be a dice roll
        for(var count=1; count <= num; count++){

          res[res.length] = sign * Math.ceil(max*Math.random())
          type[type.length] = max
        } //end for
      } else {
        res[res.length] = sign * num
        type[type.length] = 0
      }
    } else {
      return null
    }
  }
  if (res.length === 0){
    return null
  }
  return {'res':res, 'type':type}

}

export default diceParser
