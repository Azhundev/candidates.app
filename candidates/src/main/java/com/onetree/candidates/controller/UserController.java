package com.onetree.candidates.controller;

import com.onetree.candidates.model.User;
import com.onetree.candidates.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@RestController
@CrossOrigin
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> addUser(@Valid @RequestBody User user, BindingResult result) {

        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();

            for (FieldError error: result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            return new ResponseEntity<Map<String, String >>(errorMap, HttpStatus.BAD_REQUEST);
        }

        User newUser = userService.saveOrUpdateUser(user);

        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{user_id}")
    public ResponseEntity getUserById(@PathVariable Long user_id) {
        User user = userService.findById(user_id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @DeleteMapping("{user_id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long user_id) {

        userService.delete(user_id);

        return new ResponseEntity<String >("User deleted", HttpStatus.OK);
    }
}
