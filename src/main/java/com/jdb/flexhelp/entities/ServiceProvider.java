package com.jdb.flexhelp.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import lombok.Builder;
import lombok.Getter;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
@Getter
@Entity
@DiscriminatorValue(value = "srv_provider")
public class ServiceProvider extends User {

	@Builder
	public ServiceProvider() {
		super();
	}

	@Builder
	public ServiceProvider(int id, String firstName, String lastName, String email, String password) {
		super(id, firstName, lastName, email, password);
	}

}
