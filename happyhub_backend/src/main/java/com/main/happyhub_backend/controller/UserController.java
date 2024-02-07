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



@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/get-users")
    public List<UserModel> getAllUser() {
       return userService.getAllUser();
    }

    @GetMapping("/get-user/{email}")
    public Optional<UserModel> getUserById(@PathVariable String email){
        return userService.getUser(email);
    }

    @GetMapping("/user/booked-events/{email}")
    public List<EventModel> getBookedEvents(@PathVariable String email) {
        return userService.getEventsBookedByUser(email);
    }

    @GetMapping("/user/get-event/{id}")
    public EventModel getEventById(@PathVariable int id) {
        return userService.getEventById(id);
    }
    
    
    
    @PutMapping("/user/update")
    public String updateUser(@RequestBody UserModel entity) {
       return userService.updateUserModel(entity);
    }

    @PutMapping("user/update-event")
    public String updateEvent(@RequestBody EventModel entity) {
        return userService.updateEvent(entity);
    }

    @PostMapping("/user/add-event/{email}")
    public String bookEvent(@PathVariable String email,@RequestBody EventModel entity) {
        return userService.addEvent(email, entity);
    }
    
}
