# Stage 1: Build the frontend
FROM node:18 AS frontend-build
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Build the backend and bundle the frontend
FROM maven:3.9.6-eclipse-temurin-21 AS backend-build
WORKDIR /app
COPY backend/pom.xml backend/mvnw backend/mvnw.cmd backend/.mvn ./backend/
COPY backend/src ./backend/src
COPY --from=frontend-build /frontend/dist ./backend/src/main/resources/static
WORKDIR /app/backend
RUN ./mvnw clean package -DskipTests

# Stage 3: Run the application
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=backend-build /app/backend/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]