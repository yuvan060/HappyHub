package com.main.happyhub_backend.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {
    @GetMapping("/sample")
    public String getSample(){
        return "Hey From Happy Hub";
    }
}
