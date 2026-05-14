# Stage 1: Build the frontend
FROM node:22 AS frontend-build
WORKDIR /frontend
COPY package*.json ./
RUN npm install --include=dev
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=1024"
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