package com.main.happyhub_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.happyhub_backend.model.AddonModel;
import com.main.happyhub_backend.model.AdminModel;
import com.main.happyhub_backend.model.ThemeModel;
import com.main.happyhub_backend.model.User;
import com.main.happyhub_backend.repository.AddonRepository;
import com.main.happyhub_backend.repository.AdminRepository;
import com.main.happyhub_backend.repository.ThemeRepository;
import com.main.happyhub_backend.repository.UserRepository;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;
    @Autowired
    UserRepository userRepo;
    @Autowired
    ThemeRepository themeRepository;
    @Autowired
    AddonRepository addonRepository;

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

    public String addTheme(String email,ThemeModel themeModel){
        Optional<AdminModel> admin = adminRepository.findByUserEmail(email);
        if(admin.isEmpty()){
            return "User not found";
        }
        themeModel.setAdminModel(admin.get());
        themeRepository.save(themeModel);
        return "Theme added successfully";
    }

    public List<ThemeModel> getThemesByAdmin(String email){
        Optional<AdminModel> admin = adminRepository.findByUserEmail(email);
        if(admin.isEmpty()){
            return null;
        }
        return admin.get().getThemes();
    }

    public List<ThemeModel> getAllThemes(){
        return themeRepository.findAll();
    }

    public ThemeModel getThemeById(int id){
        return themeRepository.findById(id).get();
    }
    
    public String addAddOns(String email,AddonModel addonModel){
        Optional<AdminModel> admin = adminRepository.findByUserEmail(email);
        if(admin.isEmpty()){
            return "User not found";
        }
        addonModel.setAdminModel(admin.get());
        addonRepository.save(addonModel);
        return "Add-on added successfully";
    }

    public List<AddonModel> getAddOnsByAdmin(String email){
        Optional<AdminModel> admin = adminRepository.findByUserEmail(email);
        if(admin.isEmpty()){
            return null;
        }
        return admin.get().getAddons();
    }

    public List<AddonModel> getAllAddOnds(){
        return addonRepository.findAll();
    }

    public AddonModel getAddOnById(int id){
        return addonRepository.findById(id).get();
    }
}
