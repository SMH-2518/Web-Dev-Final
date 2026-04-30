package com.protecsure.backend.repository;

import com.protecsure.backend.entity.OtpToken;
import com.protecsure.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface OtpTokenRepository extends JpaRepository<OtpToken, Long> {
    Optional<OtpToken> findByToken(String token);
    Optional<OtpToken> findByUser(User user);
    void deleteByUser(User user);
}
