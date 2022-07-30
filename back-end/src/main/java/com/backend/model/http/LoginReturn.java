package com.backend.model.http;

import com.backend.model.UserPublicData;

public class LoginReturn {
    
    private String token;
    private UserPublicData userPublicData;

    public LoginReturn(String token, UserPublicData userPublicData) {
        this.token = token;
        this.userPublicData = userPublicData;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserPublicData getUserPublicData() {
        return userPublicData;
    }

    public void setUserPublicData(UserPublicData userPublicData) {
        this.userPublicData = userPublicData;
    }


}
