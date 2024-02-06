package com.main.happyhub_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.happyhub_backend.model.EventModel;
import com.main.happyhub_backend.model.User;
import com.main.happyhub_backend.model.UserModel;
import com.main.happyhub_backend.repository.EventRepository;
import com.main.happyhub_backend.repository.UserModelRepository;
import com.main.happyhub_backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserModelRepository userRepository;
    @Autowired
    UserRepository userRepo;
    @Autowired
    EventRepository eventRepository;

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

    public String updateUserModel(UserModel userModel){
        Optional<User> user = userRepo.findByEmail(userModel.getUser().getEmail());
        System.out.println(user);
        if(user.isEmpty()){
            return "User Not Found";
        }
        user.get().setName(userModel.getUser().getName());
        userRepo.save(user.get());
        Optional<UserModel> userModelRepo = userRepository.findByUser(user.get());
        userModelRepo.get().setMobileNumber(userModel.getMobileNumber());
        userRepository.save(userModelRepo.get());
        return "Updated Successfully";
    }

    public String addEvent(int id,EventModel event){
        Optional<UserModel> userModel = userRepository.findById(id);
        if(userModel.isEmpty()){
            return "User not found";
        }
        event.setUserModel(userModel.get());
        eventRepository.save(event);
        return "Event Added Successfully";
    }

    public List<EventModel> getEventsBookedByUser(int userId) {
        Optional<UserModel> userOptional = userRepository.findById(userId);
            UserModel user = userOptional.get();
            return user.getEvents();
        
    }

}
