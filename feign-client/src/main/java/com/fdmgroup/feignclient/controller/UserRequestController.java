package com.fdmgroup.feignclient.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.feignclient.request.UserRequestService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/gateway/users")
@AllArgsConstructor
public class UserRequestController {
	private UserRequestService userRequestService;

	@PostMapping("/admin")
	ResponseEntity<?> saveAdmin(@RequestBody Object admin) {
		return new ResponseEntity<>(userRequestService.saveAdmin(admin), HttpStatus.CREATED);
	};

	@PostMapping("/client")
	ResponseEntity<?> saveClient(@RequestBody Object client) {
		return new ResponseEntity<>(userRequestService.saveAdmin(client), HttpStatus.CREATED);
	};

	@PostMapping("/engineer")
	ResponseEntity<?> saveEngineer(@RequestBody Object engineer) {
		return new ResponseEntity<>(userRequestService.saveAdmin(engineer), HttpStatus.CREATED);
	};

	@GetMapping
	ResponseEntity<?> findAllUsers() {
		return new ResponseEntity<>(userRequestService.findAllUsers(), HttpStatus.OK);
	};

	@GetMapping("/{id}")
	ResponseEntity<?> findUserById(@PathVariable long id) {
		return new ResponseEntity<>(userRequestService.findUserById(id), HttpStatus.OK);
	};

	@DeleteMapping("/{id}")
	ResponseEntity<?> deleteUserById(@PathVariable long id) {
		userRequestService.deleteUserById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	};
}
