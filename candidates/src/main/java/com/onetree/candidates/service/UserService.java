package com.onetree.candidates.service;

import com.onetree.candidates.model.User;
import com.onetree.candidates.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User saveOrUpdateUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User findById(Long id) {
        return userRepository.getById(id);
    }

    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    public void delete(Long id) {
        User user = findById(id);
        userRepository.delete(user);
    }
}
