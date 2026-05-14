package com.protecsure.backend.repository;

import com.protecsure.backend.entity.OtpToken;
import com.protecsure.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

public interface OtpTokenRepository extends JpaRepository<OtpToken, Long> {
    Optional<OtpToken> findByToken(String token);
    Optional<OtpToken> findByUser(User user);
    @Transactional
    @Modifying
    void deleteByUser(User user);
}
