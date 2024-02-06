package com.main.happyhub_backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.happyhub_backend.model.AdminModel;
import com.main.happyhub_backend.model.User;
import com.main.happyhub_backend.repository.AdminRepository;
import com.main.happyhub_backend.repository.UserRepository;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    UserRepository userRepo;

    public Optional<AdminModel> getAdmin(int id){
        return adminRepository.findById(id);
    }

    public String updateAdmin(AdminModel adminModel){
        Optional<User> user = userRepo.findByEmail(adminModel.getUser().getEmail());
        if(user.isEmpty()){
            return "User not found";
        }
        user.get().setName(adminModel.getUser().getName());
        userRepo.save(user.get());
        Optional<AdminModel> admin  = adminRepository.findByUser(user.get());
        admin.get().setMobileNumber(adminModel.getMobileNumber());
        adminRepository.save(admin.get());
        return "Updated successfully";
    }
}
