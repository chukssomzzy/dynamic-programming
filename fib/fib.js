const fib= n=>{
	if(n <= 2 ) return 1;
	 return fib(n - 1) + fib(n - 2)
}
/*console.log(opfib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(50))    */

    //memoizatiom
const opFib=(n, memo = {} ) =>{
    if(n in memo) return memo[n]
    if (n <=2) return 1
    memo[n] = opFib(n - 1, memo) + opFib(n-2, memo);
    return memo[n]
}


console.log(opFib(6))
console.log(opFib(7))
console.log(opFib(8))
console.log(opFib(2000))    
