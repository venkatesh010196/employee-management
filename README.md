# employee-management
## Full-Stack Employee Management App

This is a simple full-stack application with a Spring Boot backend and React frontend. The app allows you to manage employees.


## Prerequisites
Install the following in your local system.
- Java 11 or higher
- Maven
- Node.js & npm

---

## How to Run the Application Locally


### 1. Front-end(React)
cd frontend/
npm install
npm start

Open /demo/src/main/java/com/example/demo/config/WebConfig.java, and replace "http://localhost:3000" in allowedOrigins method call with the url of the front end app in your local system.

public class WebConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000") // Allow requests from any origin
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Specify allowed HTTP methods
                        .allowedHeaders("*") // Allow all headers
                        .allowCredentials(true); // Allow credentials if needed
            }
        };
    }
}

### 2. Backend (Spring Boot)
1. Open a terminal and navigate to the `backend/` directory:
   ```bash
   cd backend/
mvn clean install
mvn spring-boot:run




