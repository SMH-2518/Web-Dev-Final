# 🛡️ ProtecSure

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5.0-6DB33F?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

**ProtecSure** is a premium cybersecurity platform designed to protect your digital assets. Built with a modern glass-morphism aesthetic, it combines a high-performance React 19 frontend with a robust Spring Boot 3.5 backend.

---

## ✨ Features

- 🔐 **Secure Authentication**: Stateless JWT-based authentication with high-security standards.
- 📧 **OTP Verification**: Reliable email verification powered by **Brevo HTTP API** (bypassing SMTP restrictions).
- 🎨 **Premium UI**: Stunning glass-morphism dark theme with smooth animations and responsive layouts.
- 👤 **User Dashboard**: Comprehensive profile management, account security, and subscription tracking.
- 🏗️ **Robust Backend**: Clean architecture with Spring Security, JPA, and RESTful principles.
- 🐳 **Docker Ready**: Fully containerized for seamless deployment to platforms like Render or AWS.

---

## 🛠 Tech Stack

### Frontend
- **React 19** - Functional components and modern hooks.
- **Vite** - Lightning-fast build and development server.
- **React Router 7** - Declarative client-side routing.
- **CSS Modules** - Scoped, maintainable styling.

### Backend
- **Spring Boot 3.5.0** - Enterprise-grade Java framework.
- **Spring Security** - Advanced authentication and authorization.
- **Spring Data JPA** - Efficient database abstraction.
- **MySQL / H2** - Production-ready and development-friendly databases.
- **JJWT** - Secure JSON Web Token implementation.
- **Brevo API** - Reliable transactional email delivery.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18+)
- **Java 17**
- **Maven**
- **MySQL** (Optional: H2 used by default in dev)

### 1. Clone & Install
```bash
git clone https://github.com/your-username/protecsure.git
cd protecsure

# Install frontend dependencies
npm install
```

### 2. Configure Environment
Create a `.env` file in the `backend/` directory:
```env
# Database
DB_URL=jdbc:mysql://localhost:3306/protecsure
DB_USER=root
DB_PASSWORD=your_password

# Security
JWT_SECRET=your_minimum_256_bit_secret_key_here

# Email (Brevo)
BREVO_API_KEY=your_brevo_api_key_here
```

### 3. Run Development Servers

**Start Backend (Port 8080):**
```bash
cd backend
./mvnw spring-boot:run
```

**Start Frontend (Port 5173):**
```bash
# In a new terminal (root directory)
npm run dev
```

---

## 🐳 Deployment (Docker)

ProtecSure is optimized for single-container deployment. The Dockerfile builds both the frontend and backend into a unified JAR.

```bash
# Build the image
docker build -f backend/Dockerfile -t protecsure .

# Run the container
docker run -p 8080:8080 \
  -e DB_URL=your_production_db_url \
  -e BREVO_API_KEY=your_key \
  -e JWT_SECRET=your_secret \
  protecsure
```

---

## 📚 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register new user (triggers OTP) |
| `POST` | `/api/auth/verify` | Verify OTP code |
| `POST` | `/api/auth/login` | Authenticate and get JWT |
| `GET` | `/api/user/profile` | Get logged-in user details |
| `PUT` | `/api/user/profile` | Update profile information |

---

## 🏗 Project Structure

```text
protecsure/
├── backend/                 # Spring Boot Backend
│   ├── src/main/java/       # Business logic & Security
│   ├── src/main/resources/  # Configuration & Templates
│   └── Dockerfile           # Unified deployment config
├── src/                     # React Frontend
│   ├── components/          # UI Components
│   ├── pages/               # Route components
│   └── context/             # State management
├── public/                  # Static assets
└── package.json             # Frontend & Build scripts
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  <b>ProtecSure</b> • Securing the future, today.
</p>
