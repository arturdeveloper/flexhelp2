package com.jdb.flexhelp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jdb.flexhelp.entities.User;

public interface UserSessionRepository extends JpaRepository<User, String> {

	User findTopByOrderByIdDesc();

	Optional<User> findByOauthId(String userId);
}