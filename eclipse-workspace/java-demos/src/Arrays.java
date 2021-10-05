
public class Arrays {
	public static void main(String[] args) {
		
		
		// Arrays -- Declaration, Instantiation, Initialization   
		// To store data sequentially

		// Approach #1 -- Declaration and Initialization
		int[] scores = { 10, 20, 30 };
		
		System.out.println(scores.length);
		
		// Approach #2  
		// Declaration, Instantiation, Initialization
		int[] marks = new int[] {100, 66, 24, 53, 90};
		
		// Approach #3 
		// Declaration, Instantiation, later we will initialize
		int[] ages = new int[3];
		ages[0] = 24;
		ages[1] = 34;
		ages[2] = 4;
		
		
		System.out.println(ages[0]); // to extract first element
		System.out.println(ages[ages.length - 1]); // to extract last element
		
		
		
		
	}
}
