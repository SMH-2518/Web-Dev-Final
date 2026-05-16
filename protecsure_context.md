# ProtecSure: AI Context Snapshot

*Copy and paste the text below into your next AI chat to instantly provide full context of the ProtecSure project while using minimal tokens.*

---

**Project Name**: ProtecSure
**Tech Stack**: React 19 (Vite, JS, CSS Modules), Spring Boot 3.5.0 (Java 17, MySQL/H2, Spring Security, Brevo HTTP API).
**Architecture**: Monolithic React frontend talking to a stateless Spring Boot API. Optimized for single-container Docker deployment.

### Core Features
1. **Frontend**: Elite, glass-morphism dark-theme cybersecurity UI. Main pages: Home, Plans, Download, Privacy.
2. **Authentication Flow (Stateless JWT)**:
   - React `Auth.jsx` portal handles Login, Register, and OTP Verification via `AuthContext.jsx`.
   - Backend `AuthController` issues JWTs upon successful login.
   - Global CORS configured via `SecurityConfig.java`.
3. **Email Verification**:
   - Users register with an email. Backend `EmailService` sends a 6-digit OTP using **Brevo HTTP API** (bypasses SMTP blocking).
   - OTP stored in `otp_tokens` table.
4. **Profile Dashboard**:
   - React `Profile.jsx` dashboard accessible only when `user` context exists.
   - Contains Account Details, Password Mockup, and Subscription UI.

### Key Directories
- Frontend: `src/` (components, pages, context, styles).
- Backend: `backend/src/main/java/com/protecsure/backend/` (controller, entity, repository, security, service).
- Deployment: `backend/Dockerfile` builds both layers into a single JAR.

### Current State
- UI is fully polished, responsive, and branded.
- Switched from Gmail SMTP to **Brevo API** for better reliability on platforms like Render.
- Database is configurable for MySQL (production) or H2 (development).
- Ready for production deployment via Docker.
