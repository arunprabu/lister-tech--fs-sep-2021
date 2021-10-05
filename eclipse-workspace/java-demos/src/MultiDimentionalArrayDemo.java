
public class MultiDimentionalArrayDemo {

	public static void main(String[] args) {
		
		// Multi dim arrays
		int[][] nos = new int[3][3];
		
		nos[0][0] = 10;
		nos[0][1] = 20;
		nos[0][2] = 30;
		
		nos[1][0] = 100;
		nos[1][1] = 200;
		nos[1][2] = 300;
		
		nos[2][0] = 1000;
		nos[2][1] = 2000;
		nos[2][2] = 3000;
		
		// printing Row 1 col 2 
		System.out.println( nos[0][1]);
		
		// printing Row 2 col 3
		System.out.println( nos[1][2]); 
		
		
	}
}
