# Problem

write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as args.

The array should return the shortest combination of nbers that adds up exactly to the target sum 

If there is a tie for the shortest return any one of the shortest 
# BruteForce

m = targetSum 
n= nums.length 

## Time Compexity
 branching Factor = n 
 height = m^n 
 O(m^n * n) 

## Space Complexity 

O(m^2)

# Memoized Complexity 

## Time 

O(m ^ 2 * m)

## Space 

O(m ^ 2)
