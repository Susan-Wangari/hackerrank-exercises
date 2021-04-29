//a variable that will hold the function expression
const plantNeedsWater = function(day) {
  if(day === 'Wednesday') { //conditional
    return true;
  } else { 
    return false;
  };
};
//calling the function
console.log(plantNeedsWater('Tuesday'));
