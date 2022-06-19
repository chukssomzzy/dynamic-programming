# Problem 

Write a function `countConstruct(target, wordBank)@` that acceptsa string and an array strings. 
 
 The function should return the numbers of ways the function can be constructed by the concaneting elements of the `wordBank` array.

 You may reuse elements of the `wordBank` as much as possible


# Brute Force 

m = target.length 

n = wordBank.length 

## Time and Space Complexity
O(n^m * m) time 
O(m^2) space 

# Memorized

## Space and Time Complexity
O(n * m^2) time 
O(m^2)space

