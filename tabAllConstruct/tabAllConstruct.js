const allConstruct = (target, wordBank) => {
     const table = Array(target.length + 1).fill().map(() =>[]);
        table[0] = [[]];
    for(let i = 0; i <= target.length; i++){
        for(let word of wordBank){
            if(target.startsWith(word,i)){
                const newCombination = table[i].map(item=>[...item,word])
                table[i + word.length].push(...newCombination)
            }
        }
}
return table[target.length];
}
//  console.log(allConstruct('purplecow',['purple','cow','purplecow']));
console.log(allConstruct("purple",['purp','p','ur','le',"purpl"]))
//console.log(allConstruct("ilikegoogle",["i","like","google",'ilike','ilikegoogle','go','ogle']));
