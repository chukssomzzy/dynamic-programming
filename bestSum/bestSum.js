const bestSum = (targetSum, nums,memo={} ) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null 
    let shortestCombination = null;

    for(let num of nums){
        const remainder = targetSum - num;
        const remainderResult = bestSum(remainder, nums,memo);;
        if(remainderResult !== null){

            const regularCombination =  [...remainderResult,num];
           //check if regularCombination is shorter than shortestCombination 
              if(shortestCombination === null || regularCombination.length < shortestCombination.length){
                    shortestCombination = regularCombination;

              }

        }
    }
    memo[targetSum] = shortestCombination
         return shortestCombination;
}


     console.log(bestSum(7,[1,2,3,4,5,6,7]));
     console.log(bestSum(8,[2,3,5,7]));
     console.log(bestSum(8,[1,4,5]));
    console.log(bestSum(100,[2,3,4,5,6,]));
