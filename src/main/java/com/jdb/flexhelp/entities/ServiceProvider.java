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
	public ServiceProvider(Integer id, String oauthId, String firstName, String lastName, String email, String password) {
		super(id, oauthId, firstName, lastName, email, password);
	}

}
