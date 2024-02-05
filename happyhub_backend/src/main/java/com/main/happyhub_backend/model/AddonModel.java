package com.main.happyhub_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AddonModel {
    @Id
    private int addonId;
    private String addonName;
    private String addonImageURL;
    private String addonDescription;
    private String addonPrice;
    
    public AddonModel(int addonId, String addonName, String addonImageURL, String addonDescription, String addonPrice) {
        this.addonId = addonId;
        this.addonName = addonName;
        this.addonImageURL = addonImageURL;
        this.addonDescription = addonDescription;
        this.addonPrice = addonPrice;
    }

    public int getAddonId() {
        return addonId;
    }

    public void setAddonId(int addonId) {
        this.addonId = addonId;
    }

    public String getAddonName() {
        return addonName;
    }

    public void setAddonName(String addonName) {
        this.addonName = addonName;
    }

    public String getAddonImageURL() {
        return addonImageURL;
    }

    public void setAddonImageURL(String addonImageURL) {
        this.addonImageURL = addonImageURL;
    }

    public String getAddonDescription() {
        return addonDescription;
    }

    public void setAddonDescription(String addonDescription) {
        this.addonDescription = addonDescription;
    }

    public String getAddonPrice() {
        return addonPrice;
    }

    public void setAddonPrice(String addonPrice) {
        this.addonPrice = addonPrice;
    }

    
}
