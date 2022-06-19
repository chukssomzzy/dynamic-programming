const howSum = (targetSum, nums,memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(let num of nums) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, nums, memo);
        if(remainderResult !==null) {
         memo[targetSum] =  [...remainderResult, num];
            console.log(memo)
            return memo[targetSum];
        }

    }
    memo[targetSum] = null;
    return null
}


console.log((howSum(7, [2,3])));
/*console.log((howSum(7, [5,7,3,4])));
console.log((howSum(1, [122,31,412])));
console.log((howSum(900, [41,51])));
console.log(howSum(300,[7,14]));     */
