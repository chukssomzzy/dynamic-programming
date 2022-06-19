const canSolve = (target,numbers)=>{
    const table = Array(target + 1).fill(false)
    table[0] = true 
    for(let i = 0; i<=target; i++){
        const current = table[i]
        if(current){
            for(let num of numbers){
                if(num <= target)
                table[i + num] = current
            }
        }
    }
    return table[target]
}

//console.log(canSolve(50000000,[3,4,5,6]))
console.log(canSolve(11090000,[3,4,5,6]))
