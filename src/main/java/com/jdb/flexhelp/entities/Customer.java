package com.jdb.flexhelp.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
@Entity
@DiscriminatorValue(value = "customer")
public class Customer extends User {
	
}