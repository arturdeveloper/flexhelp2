package com.jdb.flexhelp;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jdb.flexhelp.entities.User;
import com.jdb.flexhelp.repositories.UserRepository;

@Component
public class Initializer implements CommandLineRunner {
	private final UserRepository repository;

	public Initializer(UserRepository repository) {
		super();
		this.repository = repository;
	}

	@Override
	public void run(String... args) throws Exception {
//		Stream.of("100", "101", "102", "103", "104").forEach(
				Stream.of(100, 101, 102, 103, 104).forEach(
				id -> repository.save(new User(id, "first" + id, "last" + id, "mail" + id + "@mail.com", "secret")));
		
		repository.findAll().forEach(System.out::println);
	}

}
