package com.main.happyhub_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.happyhub_backend.model.UserModel;
import com.main.happyhub_backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public String addUser(UserModel userModel) {
        userRepository.save(userModel);
        return "Successfully added";
    }

    public Optional<UserModel> getUser(int id){
        return userRepository.findById(id);
    }

    public List<UserModel> getAllUser(){
        return userRepository.findAll();
    }

}
