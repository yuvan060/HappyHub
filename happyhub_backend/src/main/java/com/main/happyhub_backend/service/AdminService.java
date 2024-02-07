package com.main.happyhub_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.happyhub_backend.model.AddonModel;
import com.main.happyhub_backend.model.AdminModel;
import com.main.happyhub_backend.model.FoodModel;
import com.main.happyhub_backend.model.ThemeModel;
import com.main.happyhub_backend.model.User;
import com.main.happyhub_backend.repository.AddonRepository;
import com.main.happyhub_backend.repository.AdminRepository;
import com.main.happyhub_backend.repository.FoodRepository;
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
    @Autowired
    FoodRepository foodRepository;

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

    public String updateThemes(ThemeModel themeModel){
        Optional<ThemeModel> themes = themeRepository.findById(themeModel.getThemeId());
        if(themes.isEmpty()){
            return "Themes not found";
        }
        themes.get().setThemeName(themeModel.getThemeName());
        themes.get().setThemeImageURL(themeModel.getThemeImageURL());
        themes.get().setThemeDescription(themeModel.getThemeDescription());
        themes.get().setThemeCost(themeModel.getThemeCost());
        themes.get().setThemePhotographer(themeModel.getThemePhotographer());
        themes.get().setThemeReturnGift(themeModel.getThemeReturnGift());
        themes.get().setThemeVideographer(themeModel.getThemeVideographer());
        themes.get().setPublished(themeModel.isPublished());
        themeRepository.save(themes.get());
        return "Updated Successfully";
    }

    public String updateAddon(AddonModel addonModel) {
        Optional<AddonModel> addon = addonRepository.findById(addonModel.getAddonId());
        if (addon.isEmpty()) {
            return "Addon not found";
        }
        addon.get().setAddonName(addonModel.getAddonName());
        addon.get().setAddonDescription(addonModel.getAddonDescription());
        addon.get().setAddonPrice(addonModel.getAddonPrice());
        addon.get().setAddonImageURL(addonModel.getAddonImageURL());
        addonRepository.save(addon.get());
        return "Addon updated successfully";
    }

    public String updateFood(FoodModel foodModel) {
        Optional<FoodModel> food = foodRepository.findById(foodModel.getFoodId());
        if (food.isEmpty()) {
            return "Food not found";
        }
        food.get().setFoodName(foodModel.getFoodName());
        food.get().setFoodImageURL(foodModel.getFoodImageURL());
        food.get().setFoodDescription(foodModel.getFoodDescription());
        food.get().setFoodPrice(foodModel.getFoodPrice());
        foodRepository.save(food.get());
        return "Food updated successfully";
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
    
    public String addFood(String email,FoodModel foodModel){
        Optional<AdminModel> admin = adminRepository.findByUserEmail(email);
        if(admin.isEmpty()){
            return "User not found";
        }
        foodModel.setAdminModel(admin.get());
        foodRepository.save(foodModel);
        return "Food added successfully";
    }

    public List<FoodModel> getFoodByAdmin(String email){
        Optional<AdminModel> admin = adminRepository.findByUserEmail(email);
        if(admin.isEmpty()){
            return null;
        }
        return admin.get().getFoods();
    }

    public List<FoodModel> getAllFoods(){
        return foodRepository.findAll();
    }

    public FoodModel getFoodById(int id){
        return foodRepository.findById(id).get();
    }
}
