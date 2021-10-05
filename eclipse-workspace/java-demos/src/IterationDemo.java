import java.util.Arrays;

public class IterationDemo {

	public static void main(String[] args) {
		
		
		int[] scores = { 10, 20, 30 };
	
		/* old fashioned - for loop */
//		for(int i = 0; i < scores.length; i++) {
//			System.out.println(scores[i]);
//		}
		
		// for each  -- TODO: Learn about index in for each
//		for(int score: scores) {
//			System.out.println(score);
//		}
		
		int[][] nos = new int[2][3];
		nos[0][0] = 10;
		nos[0][1] = 20;
		nos[0][2] = 30;
		
		nos[1][0] = 100;
		nos[1][1] = 200;
		nos[1][2] = 300;
		
		for(int[] rows: nos) {
			for(int item: rows) {
				System.out.println(item);
			}
		}
		
		// Learn about Arrays.fill 
		int ar[] = {2, 2, 1, 8, 3, 2, 2, 4, 2}; // instead of filling like this -- try the following
		// To fill complete array with a particular value
        Arrays.fill(ar, 10); // 10 is the value going to be there in all indices
        System.out.println("Array completely filled" +
                  " with 10\n" + Arrays.toString(ar));
		
        
        int[] dupScores = Arrays.copyOf(scores, 3);
       
        System.out.println("Array of dupScores: " + Arrays.toString(dupScores));
       		
		
	}
}
