// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    //() this means that the items are in a group and 1 of them must be included for the test to pass
    // | stands for or
    //^ means that it has to start with the indicated characters
    //$ means it should end there
    const re = /^(Mr|Mrs|Ms|Dr|Er)\.\w+$/
    /*
     * Do not remove the return statement
     */
    return re;
}

