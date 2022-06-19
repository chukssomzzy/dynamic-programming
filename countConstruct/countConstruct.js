const countConstruct = (target, wordBank,memo={})=>{
    if(target in memo) return memo[target]
    if(target === '') return 1;
      let totalCount = 0
    for(let word of wordBank){
        if (target.indexOf(word) === 0){
        const numOfWays = countConstruct(target.slice(word.length),wordBank,memo)
     
     totalCount += numOfWays
    }  
    }
   memo[target] = totalCount
    return memo[target]
}


console.log(countConstruct('somzzy',['somzzy','omz'])) 
console.log(countConstruct('somzgzy',['som','omzs']))
console.log(countConstruct("abcdef",['ab','ab','aby','ab','gb','abg','abc','def']))
console.log(countConstruct('eeeeffffeeeeeeessdfeee',['e','ee','eff','efd','edg','fff','eee','ssd','fee']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','egh','ehd','edg','h','eee','ssd','jee','eeeee','je']))
console.log(countConstruct('skateboard',['ska','ate','bo','rd','t','boar']))
