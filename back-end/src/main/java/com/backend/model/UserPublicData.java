package com.backend.model;

import java.util.List;

public class UserPublicData {
    
    private String name;
    private String surname;
    private List<String> roles;
    
    public UserPublicData(String name, String surname, List<String> roles) {
        this.name = name;
        this.surname = surname;
        this.roles = roles;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

}
