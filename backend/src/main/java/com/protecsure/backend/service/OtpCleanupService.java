package com.protecsure.backend.service;

import com.protecsure.backend.repository.OtpTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class OtpCleanupService {

    @Autowired
    private OtpTokenRepository otpTokenRepository;

    // Run every 10 minutes to clean up expired OTP tokens
    @Scheduled(fixedRate = 600000) // 10 minutes in milliseconds
    public void cleanupExpiredTokens() {
        // This will be handled by the database query, but we can also do it programmatically
        // For now, we'll rely on the isExpired() check during verification
        // In a production system, you might want to add a custom repository method
        // to delete expired tokens directly in the database
    }
}