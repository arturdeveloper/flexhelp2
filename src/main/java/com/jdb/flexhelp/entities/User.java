package com.jdb.flexhelp.entities;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "role")
public class User {

	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String oauthId;
	
//	@NotNull(message = "is required")
//	@Size(min = 5, max = 14, message = "User name must be between {2} and {1}")
//	String uname;

	private String firstName;
	private String lastName;
//	@EmailConstraint
	private String email;
	private String password;

}
