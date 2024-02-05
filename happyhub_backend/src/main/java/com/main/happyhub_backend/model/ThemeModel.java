package com.main.happyhub_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ThemeModel {
    @Id
    private int themeId;
    private String themeName;
    private String themeImageURL;
    private String themeDescription;
    private String themePhotographer;
    private String themeVideographer;
    private String themeReturnGift;
    private long themeCost;

    
    public ThemeModel(int themeId, String themeName, String themeImageURL, String themeDescription,
            String themePhotographer, String themeVideographer, String themeReturnGift, long themeCost) {
        this.themeId = themeId;
        this.themeName = themeName;
        this.themeImageURL = themeImageURL;
        this.themeDescription = themeDescription;
        this.themePhotographer = themePhotographer;
        this.themeVideographer = themeVideographer;
        this.themeReturnGift = themeReturnGift;
        this.themeCost = themeCost;
    }


    public int getThemeId() {
        return themeId;
    }


    public void setThemeId(int themeId) {
        this.themeId = themeId;
    }


    public String getThemeName() {
        return themeName;
    }


    public void setThemeName(String themeName) {
        this.themeName = themeName;
    }


    public String getThemeImageURL() {
        return themeImageURL;
    }


    public void setThemeImageURL(String themeImageURL) {
        this.themeImageURL = themeImageURL;
    }


    public String getThemeDescription() {
        return themeDescription;
    }


    public void setThemeDescription(String themeDescription) {
        this.themeDescription = themeDescription;
    }


    public String getThemePhotographer() {
        return themePhotographer;
    }


    public void setThemePhotographer(String themePhotographer) {
        this.themePhotographer = themePhotographer;
    }


    public String getThemeVideographer() {
        return themeVideographer;
    }


    public void setThemeVideographer(String themeVideographer) {
        this.themeVideographer = themeVideographer;
    }


    public String getThemeReturnGift() {
        return themeReturnGift;
    }


    public void setThemeReturnGift(String themeReturnGift) {
        this.themeReturnGift = themeReturnGift;
    }


    public long getThemeCost() {
        return themeCost;
    }


    public void setThemeCost(long themeCost) {
        this.themeCost = themeCost;
    }

    
}
