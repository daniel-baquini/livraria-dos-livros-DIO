package com.backend.user;

import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.entity.User;
import com.backend.models.exception.DomainException;
import com.backend.repository.UserRepository;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void createAccount(User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if(existingUser != null) {
            throw new DomainException("Já existe um usuário cadastrado com este email.");
        }

        List<String> defaultRoles = new ArrayList<>();
        defaultRoles.add("user");

        this.userRepository.save(new User(
            user.getName(),
            new BCryptPasswordEncoder().encode(user.getPassword()),
            defaultRoles,
            user.getSurname(),
            user.getUsername()
        ));
    }

    public User findByUsername(String username) {
        User user = this.userRepository.findByUsername(username);
        if(user == null) {
            throw new DomainException("Não foi encontrado nenhum usuário com o email especificado.");
        }

        return user;
    }

    public User save(User user) {
        return this.userRepository.save(user);
    }

}
