package com.main.happyhub_backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.main.happyhub_backend.model.AdminModel;


public interface AdminRepository extends CrudRepository<AdminModel, Integer>{}

