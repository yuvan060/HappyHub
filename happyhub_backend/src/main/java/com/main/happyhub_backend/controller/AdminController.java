package com.main.happyhub_backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.main.happyhub_backend.model.AdminModel;
import com.main.happyhub_backend.service.AdminService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class AdminController {

    @Autowired
    AdminService adminService;

    @GetMapping("/get-admin/{id}")
    public Optional<AdminModel> getAdmin(@PathVariable int id) {
        return adminService.getAdmin(id);
    }

    @PutMapping("admin/update")
    public String putMethodName( @RequestBody AdminModel entity) {
        return adminService.updateAdmin(entity);
    }
    

}
