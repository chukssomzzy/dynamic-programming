const gridTraveller = (m,n,memo={})=>{
    //are the args in the memo obj
   const key = m+","+n
  if( key in memo) return memo[key]
  if(m <=0 || n<=0) return 0
    if(m === 1 && n === 1) return 1
    memo[key] =  gridTraveller(m-1,n,memo)+ gridTraveller(m,n-1,memo)
    console.log(memo)
    return memo[key]
}

console.log(gridTraveller(30,30))
 //2^(n+m) time complexity

//application of memoization
