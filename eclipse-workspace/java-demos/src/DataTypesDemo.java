public class DataTypesDemo {
	
	// byte is 8 bit 2's comp int
	byte b1 = -100;  // range of byte is -128 to 127 
	byte b2 = 0;  // valid
	byte b3 = 127; // valid
	
	//byte b4 = 4234; // error
	 
	// ===================== 
	
	// short is 16 bit 2's comp int  
	short s1 = 4234;  //valid - The range is -32768 to 32767
	short s2 = -32768; // valid 
	// short s3 = 43523452345; // error
	
	// ======================
	
	// int is 32 bit  2's comp int
	int i1 = 3424242; // valid -- Range is -2147483648 to 2147483647
	// int i2= 3423553452332452384523; // error
	
	// =======================
	
	// long is 64 bit 2's comp int
	long l1 = 342355345233245238L; //Range -9,223,372,036,854,775,808 (-2^63) to 9,223,372,036,854,775,807 (2^63 – 1).  
	
	// ==========================
	
	float f1 = 5.99f;  
	
	// =========================
	double d1 = 51231.99;
	
	// ===========
	boolean isLoggedIn = true; 
	
	// =======
	// char can be used to store one char or it's equivalent ASCII key
	char c1 = 'A'; 
	char c2 = 65; // A
	
	//===========
	final double PI = 3.14; // this will give you const. You can't modify 
	
	public static void main(String[] args) {
		
	}
}