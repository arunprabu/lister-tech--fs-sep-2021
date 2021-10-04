public class TypeCastingDemo {
	public static void main(String[] args) {
		float f1 = 499.99f;
		System.out.println(f1); // 499.99 
		
		// int a1 = f1; // error
		int a1 = (int)f1;
		
		System.out.println(a1); // 499 
		
	}
}