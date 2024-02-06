package com.main.happyhub_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.time.LocalDateTime;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class EventModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;
    private String eventName;
    private String applicantName;
    private String applicantAddress;
    private String applicantMobile;
    private String applicantEmail;
    private String eventAddress;
    private Date eventDate;
    private LocalDateTime eventTime;
    private int eventThemeId;
    private int eventMenuId;
    private int addonId;
    private String eventCost;
    @ManyToOne
    private UserModel userModel;
}
