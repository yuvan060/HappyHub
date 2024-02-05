package com.main.happyhub_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class FoodModel {
    @Id
    private int foodId;
    private String foodName;
    private String foodImageURL;
    private String foodDescription;
    private String foodPrice;

    public FoodModel(int foodId, String foodName, String foodImageURL, String foodDescription, String foodPrice) {
        this.foodId = foodId;
        this.foodName = foodName;
        this.foodImageURL = foodImageURL;
        this.foodDescription = foodDescription;
        this.foodPrice = foodPrice;
    }

    public int getFoodId() {
        return foodId;
    }

    public void setFoodId(int foodId) {
        this.foodId = foodId;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getFoodImageURL() {
        return foodImageURL;
    }

    public void setFoodImageURL(String foodImageURL) {
        this.foodImageURL = foodImageURL;
    }

    public String getFoodDescription() {
        return foodDescription;
    }

    public void setFoodDescription(String foodDescription) {
        this.foodDescription = foodDescription;
    }

    public String getFoodPrice() {
        return foodPrice;
    }

    public void setFoodPrice(String foodPrice) {
        this.foodPrice = foodPrice;
    }
}
