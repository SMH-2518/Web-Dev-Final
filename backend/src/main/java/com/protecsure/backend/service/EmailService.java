package com.protecsure.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    @Autowired
    private JavaMailSender mailSender;

    public void sendVerificationCode(String to, String code) {
        // Always log to console for development/testing
        System.out.println("==================================================");
        System.out.println("EMAIL SENT TO: " + to);
        System.out.println("VERIFICATION CODE: " + code);
        System.out.println("==================================================");

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("ab4164001@smtp-brevo.com");
            message.setTo(to);
            message.setSubject("ProtecSure: Your Security Verification Code");
            message.setText("Welcome to ProtecSure.\n\nYour security verification code is: " + code + "\n\nThis code will expire in 10 minutes.\n\nIf you didn't request this code, please ignore this email.");

            mailSender.send(message);
            logger.info("Verification email sent successfully to: {}", to);
        } catch (MailException e) {
            logger.error("Failed to send verification email to {}: {}", to, e.getMessage());
            throw new RuntimeException("Email failed to send. Check SMTP credentials! " + e.getMessage());
        }
    }
}
