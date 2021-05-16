**What is good code ?**

1. Readable ⭐
2. Scalable ⭐(Big O❗)

**Big Os**

O(1) Constant(상수) Time- no loops  
O(log N) 대수- 일반적으로 검색 알고리즘은 정렬 된 경우 log n을 갖는다 (바이너리 검색).  
O(n) Linear(실같은, 순차적)- for loops, while loops through n items  
O(n log(n)) Log Liniear- usually sorting operations  
O(n^2) Quadratic(2차)- every element in a collection needs to be compared to ever other element. Two nested loops  
O(2^n) Exponential(지수)- recursive algorithms that solves a problem of size N  
O(n!) Factorial(계승)- you are adding a loop for every element

Iterating through half a collection is still O(n)
Two separate collections: O(a \* b)

**What can cause time in a function?**

Operations (+, -, \*, /)  
Comparisons (<, >, ==)  
Looping (for, while)  
Outside Function call (function())

**Rule Book**

Rule 1: Always worst Case  
Rule 2: Remove Constants  
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a\*b)  
+for steps in order  
\*for nested steps

Rule 4: Drop Non-dominant terms

**What causes Space complexity?**

Variables  
Data Structures  
Function Call  
Allocations
