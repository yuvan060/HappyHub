package com.main.happyhub_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.happyhub_backend.model.FoodModel;

public interface FoodRepository extends JpaRepository<FoodModel,Integer> {

}
