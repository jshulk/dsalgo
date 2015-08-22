## Rules
1. if an algorithm performs f(N) steps then it is O(f(n))
2. if an algorithm performs f(N) steps followed by g(N)
then it is O( f(N) + g(N) )
3. if f(N) > g(N) for large N, then O(f(N) + g(N)) = O(f(N))
4. If an algorithm performs g(N) steps for each of f(N) steps
then it is O( f(N) x g(N) ) 
5. Ignore constant multiples
O(Cxf(N)) = O(f(N))
O(f(CxN)) = O(f(N))

Common runtimes
N^1/2 = sqrt(N)

O(2^n) - selection of items ( ex - dividing a group of items into two groups )
O(N!) - n factorial, for arrangement of items ( every item can be arranged in n possible ways)

Converting log bases ( say base 2 to base 10)
Logb(N) = Loga(N)/Loga(B) - Formula for converting from base a to base b

Comparing running times
(in decreasing order of time efficiency )
logN > sqrt(N) > N > N^2 > 2^N > N!

## GCD
### Euclid's Algo
GCD (A, B)
while( B !=0 )
	remainder = A mod B 
	// GCD(A,B) = GCD(B, remainder)
	A = B 
	B = remainder
LOOP
return A

Explaination
A = mod * B + remainder
assume g is the common divisor, if g divides A and B, it means G divides mod * B as well
the algo stops when remainder becomes 0, i.e we are only left with m*B
Complexity - O(Logn)

LCM - least common multiple ( divisible by both)
12, 15
Prime factors
12 = 2x2x3
15 = 3x5
LCM = 2x2x3x5 = 60
Formula - LCM(A, B) = A x B / GCD(A, B)



