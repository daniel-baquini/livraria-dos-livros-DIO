package com.backend.model.http;

public class LoginReturn {
    
    private String token;   

    public LoginReturn(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}
