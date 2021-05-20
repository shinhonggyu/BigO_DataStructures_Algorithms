**What is good code ?**

1. Readable ⭐
2. Scalable ⭐(Big O ⭐)

- Speed (Big O Time Complexity / How much time does it take for a function to run / How many operations does it cost )
- Memory (Big O Space Complexity)

**Big Os**

O(1) Constant(상수) Time- no loops  
O(log N) 대수- 일반적으로 검색 알고리즘은 정렬 된 경우 log n을 갖는다 (바이너리 검색).  
O(n) Linear(실같은, 순차적)- for loops, while loops through n items  
O(n log(n)) Log Liniear- usually sorting operations  
O(n^2) Quadratic(2차)- every element in a collection needs to be compared to ever other element. Two nested loops  
O(2^n) Exponential(지수)- recursive algorithms that solves a problem of size N  
O(n!) Factorial(계승)- you are adding a loop for every element

Iterating through half a collection is still O(n) - O(n/2 => n)  
Two separate collections: O(a \* b) - So two separate inputs should have two separate variables and Big O notation.

**What can cause time in a function?**

Operations (+, -, \*, /)  
Comparisons (<, >, ==)  
Looping (for, while)  
Outside Function call (function())

**Rule Book** ⭐

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

---

**What Are Companies Looking For?**

- Analytic Skills 문제를 어떻게 생각하고 분석 할 수있는지
- Coding Skills 깔끔하고 간단하며 체계적이고 읽기 쉬운 코드를 작성하여 코드를 잘 작성합니까?
- Technical knowledge 지원하는 직업의 기본 사항을 알고 있습니까?
- Communication Skills
