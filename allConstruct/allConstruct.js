const allConstruct = (target,wordBank,memo={})=>{
    if(target in memo) return memo[target]
     if(target === '') return [[]]
      let totalCombination = []
   for(let word of wordBank){
      if(!target.indexOf(word)){
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct(suffix,wordBank,memo) 
      const targetWays = suffixWays.map(ways=>[...ways,word])
          //memo[target] = suffixWays
          totalCombination.push(...targetWays)
      }
   }
    memo[target] = totalCombination
 return totalCombination
}


console.log(allConstruct('somzzy',['somzzy','omz'])) 
console.log(allConstruct('somzgzy',['som','omzs']))
console.log(allConstruct("abcdef",['ab','ab','aby','ab','gb','abg','abc','def']))
console.log(allConstruct('eeeeffffeeeeeeessdfeee',['e','ee','eff','efd','edg','fff','eee','ssd','fee']))
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','egh','ehd','edg','h','eee','ssd','jee','eeeee','je']))
console.log(allConstruct('skateboard',['ska','ate','bo','rd','t','boar']))
