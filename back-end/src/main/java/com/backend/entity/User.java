package com.backend.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
// HINT: "user" is a reserved keyword (any case combination) and will throw an error while
// generating the SQL code
@Table(name = "tbl_user")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 50, nullable = false)
    @NotBlank(message = "Necessário fornecer um nome.")
    private String name;

    @Column(length = 100, nullable = false)
    @NotBlank(message = "Necessário fornecer uma senha.")
    private String password;

    @Column(length = 100, nullable = false)
    @NotBlank(message = "Necessário fornecer um sobrenome.")
    private String surname;

    @ElementCollection(fetch = FetchType.EAGER)
    // Create a new table called "user_roles" with two columns: "roles" and "user_id".
    // "user_id" will be used to join with "user" table through the "user" primary key
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    // The columns in "user_roles" now will be: "role_id" and "user_id"
    @Column(name = "role_id")
    private List<String> roles = new ArrayList<>();

    @Column(length = 100, nullable = false)
    @Email(message = "Necessário fornecer um email válido.")
    @NotBlank(message = "Necessário fornecer um email.")
    private String username;

    public User() { }

    public User(String name, String password, List<String> roles, String surname, String username) {
        this.name = name;
        this.password = password;
        this.roles = roles;
        this.surname = surname;
        this.username = username;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
