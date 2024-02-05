package com.main.happyhub_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.happyhub_backend.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel,Integer> {

}
