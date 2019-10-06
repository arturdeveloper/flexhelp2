package com.jdb.flexhelp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jdb.flexhelp.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByEmail(String email);

//	Optional<User> findById(String id);
}