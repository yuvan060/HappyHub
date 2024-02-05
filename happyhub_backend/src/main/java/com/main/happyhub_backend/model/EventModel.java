package com.main.happyhub_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.Date;
import java.time.LocalDateTime;

@Entity
public class EventModel {
    @Id
    private int eventId;
    private String eventName;
    private String applicantName;
    private String applicantAddress;
    private String applicantMobile;
    private String applicantEmail;
    private String eventAddress;
    private Date eventDate;
    private LocalDateTime eventTime;
    private int eventMenuId;
    private int addonId;
    private String eventCost;

    public EventModel(int eventId, String eventName, String applicantName, String applicantAddress, 
                      String applicantMobile, String applicantEmail, String eventAddress, 
                      Date eventDate, LocalDateTime eventTime, int eventMenuId, int addonId, 
                      String eventCost) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.applicantName = applicantName;
        this.applicantAddress = applicantAddress;
        this.applicantMobile = applicantMobile;
        this.applicantEmail = applicantEmail;
        this.eventAddress = eventAddress;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.eventMenuId = eventMenuId;
        this.addonId = addonId;
        this.eventCost = eventCost;
    }

    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getApplicantName() {
        return applicantName;
    }

    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }

    public String getApplicantAddress() {
        return applicantAddress;
    }

    public void setApplicantAddress(String applicantAddress) {
        this.applicantAddress = applicantAddress;
    }

    public String getApplicantMobile() {
        return applicantMobile;
    }

    public void setApplicantMobile(String applicantMobile) {
        this.applicantMobile = applicantMobile;
    }

    public String getApplicantEmail() {
        return applicantEmail;
    }

    public void setApplicantEmail(String applicantEmail) {
        this.applicantEmail = applicantEmail;
    }

    public String getEventAddress() {
        return eventAddress;
    }

    public void setEventAddress(String eventAddress) {
        this.eventAddress = eventAddress;
    }

    public Date getEventDate() {
        return eventDate;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }

    public LocalDateTime getEventTime() {
        return eventTime;
    }

    public void setEventTime(LocalDateTime eventTime) {
        this.eventTime = eventTime;
    }

    public int getEventMenuId() {
        return eventMenuId;
    }

    public void setEventMenuId(int eventMenuId) {
        this.eventMenuId = eventMenuId;
    }

    public int getAddonId() {
        return addonId;
    }

    public void setAddonId(int addonId) {
        this.addonId = addonId;
    }

    public String getEventCost() {
        return eventCost;
    }

    public void setEventCost(String eventCost) {
        this.eventCost = eventCost;
    }

    @Override
    public String toString() {
        return "EventModel [eventId=" + eventId + ", eventName=" + eventName + ", applicantName=" + applicantName
                + ", applicantAddress=" + applicantAddress + ", applicantMobile=" + applicantMobile
                + ", applicantEmail=" + applicantEmail + ", eventAddress=" + eventAddress + ", eventDate=" + eventDate
                + ", eventTime=" + eventTime + ", eventMenuId=" + eventMenuId + ", addonId=" + addonId + ", eventCost="
                + eventCost + "]";
    }

    
}
