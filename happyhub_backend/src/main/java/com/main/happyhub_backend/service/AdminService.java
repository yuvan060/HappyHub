package com.main.happyhub_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.happyhub_backend.model.AdminModel;
import com.main.happyhub_backend.repository.AdminRepository;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    public String addAdmin(AdminModel adminModel){
        adminRepository.save(adminModel);
        return "Successfully added";
    }

    public Optional<AdminModel> getAdmin(int id){
        return adminRepository.findById(id);
    }

    public List<AdminModel> getAllAdmin(){
        return (List<AdminModel>) adminRepository.findAll();
    }
}
