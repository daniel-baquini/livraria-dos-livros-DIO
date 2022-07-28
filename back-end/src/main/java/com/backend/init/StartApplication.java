package com.backend.init;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Component;

import com.backend.entity.User;
import com.backend.repository.UserRepository;

@Component
public class StartApplication implements CommandLineRunner {

    @Autowired
    private UserRepository repository;

    @Transactional
    @Override
    public void run(String... args) throws Exception {
        // Creating basic users, for app testing.
        // Hint: The way the user are retrieved from database, it's required to have
        // at least one role.
        
        User user = repository.findByUsername("admin");
        if(user == null) {
            user = new User();
            user.setName("Admin");
            user.setPassword(new BCryptPasswordEncoder().encode("admin123"));
            user.getRoles().add("ADMIN");
            user.setSurname("da Silva");
            user.setUsername("admin@app.com.br");
            repository.save(user);
        }

        user = repository.findByUsername("user");
        if(user == null) {
            user = new User();
            user.setName("User");
            user.setPassword(new BCryptPasswordEncoder().encode("user123"));
            user.getRoles().add("USER");
            user.setSurname("da Silva");
            user.setUsername("user@app.com.br");
            repository.save(user);
        }        
    }
    
}
