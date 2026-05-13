# ProtecSure

A modern cybersecurity web application built with React and Spring Boot, featuring secure authentication, OTP verification, and a sleek glass-morphism UI.

## 🚀 Features

- **Secure Authentication**: JWT-based stateless authentication with OTP email verification
- **Modern UI**: Glass-morphism dark theme with responsive design
- **User Management**: Profile dashboard with account details and subscription management
- **Email Integration**: SMTP-based OTP verification system
- **RESTful API**: Spring Boot backend with comprehensive security

## 🛠 Tech Stack

### Frontend

- **React 19** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **CSS Modules** - Scoped styling

### Backend

- **Spring Boot 3.5.0** - Java web framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database access layer
- **MySQL** - Relational database
- **JWT** - JSON Web Tokens for authentication
- **JavaMail** - Email sending capabilities

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **Java 17**
- **Maven** (for backend)
- **MySQL** (or H2 for development)
- **Git**

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd protecsure
   ```

2. **Backend Setup**

   ```bash
   cd backend

   # Copy environment file and configure
   cp .env.example .env
   # Edit .env file with your actual values (see Environment Setup below)

   # Configure database in src/main/resources/application.properties
   # For MySQL:
   spring.datasource.url=jdbc:mysql://localhost:3306/protecsure
   spring.datasource.username=your_username
   spring.datasource.password=your_password

   # For H2 (development):
   spring.datasource.url=jdbc:h2:mem:protecsure
   spring.datasource.driver-class-name=org.h2.Driver
   spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
   ```

3. **Frontend Setup**
   ```bash
   # From root directory
   npm install
   ```

## � Environment Setup

### Gmail SMTP Configuration for OTP Emails

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this 16-character password (ignore spaces)

3. **Configure Environment Variables**:
   Edit `backend/.env` file:
   ```env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your_16_character_app_password
   JWT_SECRET=your_super_secret_jwt_key_minimum_256_bits
   ```

### Database Setup

For MySQL:

```sql
CREATE DATABASE protecsure;
```

For H2 (development), no setup needed - it's in-memory.

### Development Mode

1. **Start Backend** (Port 8080)

   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

2. **Start Frontend** (Port 5173)

   ```bash
   npm run dev
   ```

3. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8080

### Production Build (Docker)

The application is configured to deploy as a single Docker container containing both frontend and backend:

```bash
# Build and run locally
cd backend
docker build -f Dockerfile -t protecsure .
docker run -p 8080:8080 \
  -e EMAIL_USER=your.email@gmail.com \
  -e EMAIL_PASS=your_app_password \
  -e DB_URL=jdbc:mysql://your-db-host/protecsure \
  -e DB_USER=your_db_user \
  -e DB_PASSWORD=your_db_password \
  -e JWT_SECRET=your_jwt_secret \
  protecsure
```

The Dockerfile automatically:

- Builds the React frontend
- Copies frontend assets to Spring Boot static resources
- Builds the Spring Boot backend
- Creates a single deployable JAR

### Manual Production Build

1. **Build Frontend**

   ```bash
   npm run build
   ```

2. **Build Backend**

   ```bash
   cd backend
   ./mvnw clean package
   ```

3. **Run Backend with Frontend**
   ```bash
   cd backend
   java -jar target/backend-0.0.1-SNAPSHOT.jar
   ```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - User registration (sends OTP email)
- `POST /api/auth/verify` - OTP email verification
- `POST /api/auth/resend-otp` - Resend OTP verification code
- `POST /api/auth/login` - User login (requires verified email)
- `POST /api/auth/logout` - User logout
- `POST /api/auth/logout` - User logout

### User Endpoints

- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

## 🏗 Project Structure

```
protecsure/
├── backend/                 # Spring Boot application
│   ├── src/main/java/com/protecsure/backend/
│   │   ├── controller/      # REST controllers
│   │   ├── entity/          # JPA entities
│   │   ├── repository/      # Data repositories
│   │   ├── security/        # Security configuration
│   │   └── service/         # Business logic
│   └── src/main/resources/
│       └── application.properties
├── src/                     # React frontend
│   ├── components/          # Reusable components
│   ├── pages/              # Page components
│   ├── context/            # React context
│   └── main.jsx            # App entry point
├── public/                  # Static assets
└── package.json            # Frontend dependencies
```

## 🔒 Security Features

- JWT token-based authentication
- OTP verification for account security
- CORS configuration for cross-origin requests
- Password encryption
- Secure email verification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@protecsure.com or create an issue in this repository.

---

**ProtecSure** - Securing your digital world with cutting-edge technology.</content>
<parameter name="filePath">d:\coding\Web-Dev-Final\Web-Dev-Final\README.md
