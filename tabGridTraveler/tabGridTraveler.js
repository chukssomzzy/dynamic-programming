const gridTraveller = (m, n)=>{
    const  table = Array(m+1).fill().map(()=>Array(n+1).fill(0))
    table[1][1] = 1

    for(let x = 0; x <= m; x++){
        for(let y = 0; y<= n; y++){
            const current = table[x][y]
         if(x+1 <= m) table[x+1][y] += current
            if(y+1 <= n) table[x][y+1] += current
        }
    }  
    console.log(table)
    return table[m][n]

}

console.log(gridTraveller(3,3))
