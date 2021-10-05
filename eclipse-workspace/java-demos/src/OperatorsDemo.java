
public class OperatorsDemo {

	public static void main(String[] args) {
		
		int x=10;  
        System.out.println(x++);//10 (11)   //11 wont be printed. but the value would increment.

		System.out.println(x); // 11 - you already have incremented
		
		System.out.println(++x);//12  
		
		System.out.println(x--);//12 (11)  - you have decremented.
		
		System.out.println(--x);//10  
		
		// Learn about ternary operators in java
		
		int n1 = 5, n2 = 10, max;
		
		System.out.println("First num: " + n1);
        System.out.println("Second num: " + n2);
        
        // Largest among n1 and n2
        max = (n1 > n2) ? n1 : n2;
        System.out.println("Bigger Number is: " + max);
		
		
        
	}
}
