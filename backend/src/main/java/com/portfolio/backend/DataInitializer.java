package com.portfolio.backend;

import com.portfolio.backend.model.Project;
import com.portfolio.backend.repository.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(ProjectRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                Project p1 = new Project(null, "Enterprise ERP System", 
                    "A full-scale ERP system built with Spring Boot microservices and Vue 3 dashboard.", 
                    null, "#", "#", "Spring Boot, Vue 3, PostgreSQL, Docker");
                
                Project p2 = new Project(null, "Cloud Analytics Pro", 
                    "Real-time data visualization platform with high-performance backend processing.", 
                    null, "#", "#", "Java 17, Vite, Tailwind, MongoDB");
                
                Project p3 = new Project(null, "Secure Auth Portal", 
                    "Robust authentication and authorization system implementing OAuth2 and JWT.", 
                    null, "#", "#", "Spring Security, Vue, Redis");
                
                repository.saveAll(Arrays.asList(p1, p2, p3));
                System.out.println("Database seeded with sample projects.");
            }
        };
    }
}
