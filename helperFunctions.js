function monitorCount(rows, columns) {
  return rows * columns;
};
//helper function is called inside another function
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
};
//assigning a variable to cost of monitors
const totalCost = costOfMonitors(5,4);
console.log(totalCost);
