const howSum = (target,numbers)=>{
    const table = Array(target + 1).fill(null)
    table[0] = [] 
    for(let i = 0; i <= target; i++){
        const current = table[i]
        if(current !== null){
            for(let num of numbers){
                if(num+i <= target){
                    table[i + num]  = [...current,num]
                }
            }
        }
    }
    console.log(table)
    return table[target]
}


console.log((howSum(7, [5,4,3,20])));
