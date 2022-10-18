package com.fdmgroup.helpdeskapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fdmgroup.helpdeskapi.model.User;
import com.fdmgroup.helpdeskapi.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService {
	UserRepository userRepository;

	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> findAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User findUserById(long id) {
		return userRepository.findById(id).orElse(null);
	}

	@Override
	public void deleteUserById(long id) {
		userRepository.deleteById(id);
	}
}
