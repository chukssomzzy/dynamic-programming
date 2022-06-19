const canConstruct = (target,wordBank,memo={})=>{
    if(target in memo) return memo[target];
    if(target === '') return true 
    
    for(let word of wordBank){
        if(target.indexOf(word) === 0) {
         const suffix = target.slice(word.length)
            if(canConstruct(suffix,wordBank,memo)){
                memo[target] = true;
                return true 
            }
            }
    }
    memo[target] = false;
    return false
}


console.log(canConstruct('somzzy',['somzzy','omz'])) 
console.log(canConstruct('somzgzy',['som','omzs']))
console.log(canConstruct("abcdef",['ab','ab','aby','ab','gb','abg','abc','def']))
console.log(canConstruct('eeeeffffeeeeeeessdfeee',['e','ee','eff','efd','edg','fff','eee','ssd','fee']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','egh','ehd','edg','h','eee','ssd','jee','eeeee','je']))
console.log(canConstruct('skateboard',['ska','ate','bo','rd','t','boar']))
