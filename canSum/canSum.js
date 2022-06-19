  const canSum = (targetSum,numbers,memo={})=>{
      //baseCase
      //check for target sum in memo obj 
      if(targetSum in memo) return memo[targetSum]
      if(targetSum === 0 )return true
      if(targetSum < 0) return false
      //recursive implementation

      for (let num of numbers){
       const remainder =   targetSum - num 
       if(canSum(remainder,numbers,memo)){
          memo[targetSum] = true
          return true
       }
      }
      memo[targetSum] = false
      return false
  }

console.log(canSum(11019,[3,4,5,6]))
console.log(canSum(7,[2,14]))
console.log(canSum(20,[2,5,30]))
console.log(canSum(1000,[7,14]))
console.log(canSum(10,[2,5]))
