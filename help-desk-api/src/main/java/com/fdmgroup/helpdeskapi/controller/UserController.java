package com.fdmgroup.helpdeskapi.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.helpdeskapi.model.Admin;
import com.fdmgroup.helpdeskapi.model.Client;
import com.fdmgroup.helpdeskapi.model.Engineer;
import com.fdmgroup.helpdeskapi.model.User;
import com.fdmgroup.helpdeskapi.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@Operation(summary = "Save an admin")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "User created"), })
	@PostMapping("/admin")
	public ResponseEntity<?> saveAdmin(@RequestBody Admin admin) {
		return new ResponseEntity<>(userService.saveUser(admin), HttpStatus.CREATED);
	}

	@Operation(summary = "Save an engineer")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "User created"), })
	@PostMapping("/engineer")
	public ResponseEntity<?> saveEngineer(@RequestBody Engineer engineer) {
		return new ResponseEntity<>(userService.saveUser(engineer), HttpStatus.CREATED);
	}

	@Operation(summary = "Save a client")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "User created"), })
	@PostMapping("/client")
	public ResponseEntity<?> saveClient(@RequestBody Client client) {
		return new ResponseEntity<>(userService.saveUser(client), HttpStatus.CREATED);
	}

	@Operation(summary = "Find all users")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Users found"), })
	@GetMapping
	public ResponseEntity<?> findAllUsers() {
		List<User> users = userService.findAllUsers();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	@Operation(summary = "Find a user by id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "User found"),
			@ApiResponse(responseCode = "404", description = "User not found"), })
	@GetMapping("/{id}")
	public ResponseEntity<?> findTicketById(@PathVariable long id) {
		if (userService.findUserById(id) != null) {
			return new ResponseEntity<>(userService.findUserById(id), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Delete a user by id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "User deleted"),
			@ApiResponse(responseCode = "404", description = "User not found"), })
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTicketById(@PathVariable long id) {
		if (userService.findUserById(id) != null) {
			userService.deleteUserById(id);
			return new ResponseEntity<>("User deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
		}
	}
}
