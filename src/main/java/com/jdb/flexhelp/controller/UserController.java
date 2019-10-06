package com.jdb.flexhelp.controller;

import java.util.Collection;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdb.flexhelp.entities.User;
import com.jdb.flexhelp.repositories.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {

	private final Logger log = LoggerFactory.getLogger(UserController.class);
	private UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@GetMapping("/users")
	Collection<User> users() {
		return userRepository.findAll();
	}

	@GetMapping("/users/{id}")
	ResponseEntity<?> getUser(@PathVariable Integer id) {
		Optional<User> user = userRepository.findById(id);
		return user.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

//    @PostMapping("/group")
//    ResponseEntity<Group> createGroup(@Valid @RequestBody Group group) throws URISyntaxException {
//        log.info("Request to create group: {}", group);
//        Group result = groupRepository.save(group);
//        return ResponseEntity.created(new URI("/api/group/" + result.getId()))
//                .body(result);
//    }
//
//    @PutMapping("/group/{id}")
//    ResponseEntity<Group> updateGroup(@Valid @RequestBody Group group) {
//        log.info("Request to update group: {}", group);
//        Group result = groupRepository.save(group);
//        return ResponseEntity.ok().body(result);
//    }
//
//    @DeleteMapping("/group/{id}")
//    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
//        log.info("Request to delete group: {}", id);
//        groupRepository.deleteById(id);
//        return ResponseEntity.ok().build();
//    }
}