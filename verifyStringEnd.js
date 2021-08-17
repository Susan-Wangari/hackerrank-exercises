function confirmEnding(str, target) {
  //first creates a new array
  //checks lengths of both strings 
  //returns the result to target 
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
