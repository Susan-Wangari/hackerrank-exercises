function factorial(n) {
    if(n == 1){
        return 1; //a factorial of 1 will always be 1
    }
    return n*factorial(n-1); //uses recursion
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
