package com.protecsure.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendVerificationCode(String to, String code) {
        // Output to console to make testing easy without needing real email
        System.out.println("==================================================");
        System.out.println("EMAIL SENT TO: " + to);
        System.out.println("VERIFICATION CODE: " + code);
        System.out.println("==================================================");

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("security@protecsure.com");
            message.setTo(to);
            message.setSubject("ProtecSure: Your Security Verification Code");
            message.setText("Welcome to ProtecSure.\n\nYour security verification code is: " + code + "\n\nThis code will expire in 10 minutes.");
            
            mailSender.send(message);
        } catch (Exception e) {
            System.err.println("Could not send email to Mailtrap. Check application.properties: " + e.getMessage());
        }
    }
}
