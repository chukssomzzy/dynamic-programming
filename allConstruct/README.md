# Problems 
write a function `allConstruct(target, wordbank)` that accepts a target string and an array of strings. 

The function should return all the way that the `wordBank` can construct from the `target` in a 2d array 

 Element in the `wordBank` can be reused as many times as u see fit

# Brute Force 
m = target.length 
n = wordbank.length 
height = m 

branching factor = n

## Time and Space Complexity (R)
 O(n^m)time
 O(m)space

