const bestSum = (target,numbers)=>{
    const table = Array(target + 1).fill(null)
    table[0] = []

    for(let i = 0; i <= target; i++){
        const current = table[i]
        if(current !== null){
            for(let num of numbers){
                if((num + i) <= target){
                const combination = [...current,num]
                    if(!table[i+num] || table[i + num].length > combination.length ){
                        table[i + num] = combination
                    }
            }
        }
    }
    }
    return table[target]
}

console.log(bestSum(10,[2,5,10]))
