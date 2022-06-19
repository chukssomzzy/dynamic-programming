# Problems 

write a function 'howSum(targetSum,numbers)' that takes in targetSum and an array of numbers as arguments.

 the function should return an array containing any combination of elements that adds up to exactly the targetSum, if there is no combination the function returns null

 if there are multiple combination possible u may return any single one

# Brute Force Solutiom

m = targetSum 
n = number.length

## Time Complexity
 O(n^m * m) Time 


## Space Complexity 
 O(m)

# Memoized
 
## Time Complexity 
 O(n*m^2)

## Space Complexity 
O(m^2)
