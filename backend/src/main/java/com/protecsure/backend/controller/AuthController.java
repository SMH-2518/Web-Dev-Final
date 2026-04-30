package com.protecsure.backend.controller;

import com.protecsure.backend.entity.OtpToken;
import com.protecsure.backend.entity.Role;
import com.protecsure.backend.entity.User;
import com.protecsure.backend.repository.OtpTokenRepository;
import com.protecsure.backend.repository.RoleRepository;
import com.protecsure.backend.repository.UserRepository;
import com.protecsure.backend.security.JwtUtils;
import com.protecsure.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private OtpTokenRepository otpTokenRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private EmailService emailService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> request) {
        String userName = request.get("userName");
        String email = request.get("email");
        String password = request.get("password");

        if (userRepository.existsByEmail(email)) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        // Create new user's account
        User user = new User(userName, email, encoder.encode(password));
        
        // Add basic role
        Role userRole = roleRepository.findByName("ROLE_USER")
                .orElseGet(() -> {
                    Role r = new Role("ROLE_USER");
                    return roleRepository.save(r);
                });
        user.getRoles().add(userRole);

        userRepository.save(user);

        // Generate OTP
        String otp = String.format("%06d", new Random().nextInt(999999));
        OtpToken otpToken = new OtpToken(otp, user, 10); // 10 minutes expiry
        otpTokenRepository.save(otpToken);

        // Send OTP
        emailService.sendVerificationCode(user.getEmail(), otp);

        return ResponseEntity.ok("User registered successfully! Please check your email for the verification code.");
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyEmail(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String code = request.get("code");

        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Error: User not found.");
        }

        User user = userOpt.get();
        if (user.isVerified()) {
            return ResponseEntity.badRequest().body("User is already verified.");
        }

        Optional<OtpToken> tokenOpt = otpTokenRepository.findByUser(user);
        if (tokenOpt.isEmpty() || !tokenOpt.get().getToken().equals(code)) {
            return ResponseEntity.badRequest().body("Error: Invalid verification code.");
        }

        if (tokenOpt.get().isExpired()) {
            return ResponseEntity.badRequest().body("Error: Verification code expired.");
        }

        // Verify user
        user.setVerified(true);
        userRepository.save(user);
        
        // Cleanup token
        otpTokenRepository.deleteByUser(user);

        return ResponseEntity.ok("Email verified successfully! You can now log in.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Error: User not found.");
        }

        User user = userOpt.get();
        if (!user.isVerified()) {
            return ResponseEntity.status(403).body("Error: Please verify your email before logging in.");
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        return ResponseEntity.ok(Map.of("token", jwt, "userName", user.getUserName(), "email", user.getEmail()));
    }
}
