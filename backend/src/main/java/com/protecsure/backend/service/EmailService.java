package com.protecsure.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    @Value("${brevo.api.key:}")
    private String brevoApiKey;

    public void sendVerificationCode(String to, String code) {
        // Always log to console for debugging
        System.out.println("==================================================");
        System.out.println("EMAIL SENT TO: " + to);
        System.out.println("VERIFICATION CODE: " + code);
        System.out.println("==================================================");

        try {
            RestTemplate restTemplate = new RestTemplate();

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("api-key", brevoApiKey);

            Map<String, Object> body = new HashMap<>();
            body.put("sender", Map.of("email", "ab4164001@smtp-brevo.com", "name", "ProtecSure"));
            body.put("to", List.of(Map.of("email", to)));
            body.put("subject", "ProtecSure: Your Security Verification Code");
            body.put("textContent",
                "Welcome to ProtecSure.\n\n" +
                "Your security verification code is: " + code + "\n\n" +
                "This code will expire in 10 minutes.\n\n" +
                "If you didn't request this code, please ignore this email."
            );

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

            ResponseEntity<String> response = restTemplate.postForEntity(
                "https://api.brevo.com/v3/smtp/email", entity, String.class
            );

            if (response.getStatusCode().is2xxSuccessful()) {
                logger.info("Verification email sent successfully to: {}", to);
            } else {
                logger.error("Brevo API returned error: {}", response.getStatusCode());
                throw new RuntimeException("Email API returned error: " + response.getStatusCode());
            }

        } catch (Exception e) {
            logger.error("Failed to send verification email to {}: {}", to, e.getMessage());
            throw new RuntimeException("Email failed to send: " + e.getMessage());
        }
    }
}
