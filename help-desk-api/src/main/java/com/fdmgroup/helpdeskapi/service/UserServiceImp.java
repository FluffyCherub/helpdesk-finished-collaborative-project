package com.fdmgroup.helpdeskapi.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.fdmgroup.helpdeskapi.model.User;
import com.fdmgroup.helpdeskapi.repository.UserRepository;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

	Logger logger = LoggerFactory.getLogger(UserServiceImp.class);

	@NonNull
	UserRepository userRepository;

	@Override
	public User saveUser(User user) {
		logger.info("UserServiceImp - Saving user: {}", user);
		return userRepository.save(user);
	}

	@Override
	public List<User> findAllUsers() {
		logger.info("UserServiceImp - Finding all users");
		return userRepository.findAll();
	}

	@Override
	public User findUserById(long id) {
		logger.info("UserServiceImp - Finding user by id: {}", id);
		return userRepository.findById(id).orElse(null);
	}

	@Override
	public void deleteUserById(long id) {
		logger.info("UserServiceImp - Deleting user by id: {}", id);
		userRepository.deleteById(id);
	}
}
