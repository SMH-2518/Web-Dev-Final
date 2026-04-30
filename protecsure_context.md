# ProtecSure: AI Context Snapshot

*Copy and paste the text below into your next AI chat to instantly provide full context of the ProtecSure project while using minimal tokens.*

---

**Project Name**: ProtecSure
**Tech Stack**: React 19 (Vite, JS, CSS Modules), Spring Boot 3.5.0 (Java 17, H2 In-Memory DB, Spring Security, Mail).
**Architecture**: Monolithic React frontend talking to a stateless Spring Boot API.

### Core Features
1. **Frontend**: Elite, glass-morphism dark-theme cybersecurity UI. Main pages: Home, Plans, Download, Privacy.
2. **Authentication Flow (Stateless JWT)**:
   - React `Auth.jsx` portal handles Login, Register, and OTP Verification via `AuthContext.jsx`.
   - Backend `AuthController` issues JWTs upon successful login.
   - Global CORS configured via `SecurityConfig.java` allowing `*`.
3. **Email Verification**:
   - Users register with an email. Backend `EmailService` sends a 6-digit OTP using Gmail SMTP (`application.properties`).
   - OTP stored in `otp_tokens` table mapped to `users` via H2 database.
4. **Profile Dashboard**:
   - React `Profile.jsx` dashboard accessible only when `user` context exists.
   - Contains Account Details, Password Mockup, and Subscription UI.

### Key Directories
- Frontend: `/home/shravanth/web/web-dev/src/` (components, pages, context, styles).
- Backend: `/home/shravanth/web/web-dev/backend/src/main/java/com/protecsure/backend/` (controller, entity, repository, security, service).
- Execution Script: `./srun` starts backend on 8080 and frontend on 5174+.

### Current State
- The UI is fully polished, responsive, and branded without AI jargon.
- Database is currently H2 (in-memory, resets on restart) for beta testing.
- The next logical step is wiring the "Change Password" mockup to a real backend endpoint or migrating to a persistent MySQL database for production.
