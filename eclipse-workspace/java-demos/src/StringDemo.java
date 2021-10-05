
public class StringDemo {
	
	
	public static void main(String[] args) {
		
//		char[] msg =  { 'H', 'e', 'l', 'l', 'o' };
//		
//		System.out.println(msg);
		
		String msg1 = "Hello world!";
		msg1 = "Hello!";
		System.out.println(msg1);
		
		String msg2 = new String("Welcome!");
		System.out.println(msg2);
		
		// String concatenation
		String msg3 = msg1.concat(msg2); // msg1 -- is immutable - Strings are immutable
		
		System.out.println(msg3);
		
		// compare also by using equals() -- and also by using compareTo()
		System.out.println(msg1 == msg2); 
		
		System.out.println(msg2.length());
		
		System.out.println(msg1.charAt(5));
		
		String msg4 = "   Random Text   ";
		System.out.println(msg4);
		
		System.out.println(msg4.trim());
		
		System.out.println(msg2.substring(3, 7));
		
		String msg5 = "Java is powerful";
		String[] words = msg5.split(" ");
		
		// learn about StringTokenizer and StringBuilder
		
		
		
		
		
	}

}
