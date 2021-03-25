/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let tally = 0;
    for(let num = 0; num < objects.length; num++) {
        if(objects[num].x === objects[num].y) {
            tally ++;
        }
    }
    return tally;
}
