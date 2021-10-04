/* 
 * there are 3 types of variables in Java
 * 1. Local Variable 
 * 2. Class Variables / Static Variables 
 * 3. Instance Variables / Non-static variables
 */

public class VariableDemo2 {
	
	static int x = 10; //Static Variable  // Class Variable 
	
	void updateData() {
		int z = 100; // local variable
	}
	
	public static void main(String[] args) {
		int y = 50; // instance variable
		
		System.out.println(x); // valid
		System.out.println(y); // valid
		// System.out.println(z); // error
	}
}
	