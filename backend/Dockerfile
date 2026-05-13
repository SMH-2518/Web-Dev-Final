# Step 1: Build the frontend
FROM node:18 AS frontend-build
WORKDIR /app
COPY ../package*.json ./
RUN npm install
COPY .. .
RUN npm run build

# Step 2: Build the backend with frontend included
FROM maven:3.9.6-eclipse-temurin-21 AS backend-build
WORKDIR /app
COPY . .
# Copy the built frontend to backend static resources
COPY --from=frontend-build /app/dist/* src/main/resources/static/
RUN mvn clean package -DskipTests

# Step 3: Run the application
FROM eclipse-temurin:21-jre
COPY --from=backend-build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]