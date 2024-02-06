package com.main.happyhub_backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.main.happyhub_backend.service.UserService;
import com.main.happyhub_backend.model.EventModel;
import com.main.happyhub_backend.model.UserModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;






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

    @GetMapping("/user/booked-events/{id}")
    public List<EventModel> getMethodName(@PathVariable int id) {
        return userService.getEventsBookedByUser(id);
    }
    
    
    @PutMapping("/user/update")
    public String updateUser(@RequestBody UserModel entity) {
       return userService.updateUserModel(entity);
    }

    @PostMapping("/user/add-event/{id}")
    public String postMethodName(@PathVariable int id,@RequestBody EventModel entity) {
        return userService.addEvent(id, entity);
    }
    
}
