package com.example.usermanager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class UserManager {

	public static void main(String[] args) {
		
		// Refer: https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-usagenotes-connect-drivermanager.html
	     

		String jdbcURL = "jdbc:mysql://localhost:3306/usersdb";
		String username = "root";
		String password = "password";
		
		try {
	        Class.forName("com.mysql.cj.jdbc.Driver");
	    } catch (ClassNotFoundException es) {
	        System.out.println("Where is your MySQL JDBC Driver?");
	        es.printStackTrace();
	        return;
	    }

	    System.out.println("MySQL JDBC Driver Registered!");
	    Connection mysqlConnection = null;
		
		try {
			mysqlConnection = DriverManager.getConnection(jdbcURL, username, password);
			System.out.println(mysqlConnection.toString());
			if( mysqlConnection != null ) {
				System.out.println("Connected to mysq ");
				
				// To insert data
				String insertQuery = "INSERT INTO users(name, city) VALUES('Arun', 'Toronto')";
				Statement statement = mysqlConnection.createStatement();
				statement.executeUpdate(insertQuery);
				
				mysqlConnection.close();

			}
		}catch(SQLException exception) {
			System.out.println(exception.getMessage());
		}
		finally{
			System.out.println("It is over!");
		}
		
		
	}

}
