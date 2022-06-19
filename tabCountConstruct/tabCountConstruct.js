const countConstruct = (target,wordBank)=>{
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for(let i = 0; i < target.length; i++){
        const current = table[i];
        if(current){
            for(let word of wordBank){
                if(target.startsWith(word,i)){
                    table[i + word.length] += current;
                }
            }
        }
    }
    return table[target.length];
}

console.log(countConstruct("ilikegoogle",["i","like","google",'ilike','ilikegoogle']));
