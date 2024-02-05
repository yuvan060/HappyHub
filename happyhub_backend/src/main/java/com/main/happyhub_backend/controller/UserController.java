package com.main.happyhub_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.main.happyhub_backend.service.UserService;
import com.main.happyhub_backend.model.UserModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/get-users")
    public List<UserModel> getMethodName() {
       return userService.getAllUser();
    }

    @GetMapping("/get-user/{id}")
    public Optional<UserModel> getUserById(@PathVariable int id){
        return userService.getUser(id);
    }
    

    @PostMapping("/add-user")
    public String addUser(@RequestBody UserModel userModel) {
        return userService.addUser(userModel);
    }
    
}
