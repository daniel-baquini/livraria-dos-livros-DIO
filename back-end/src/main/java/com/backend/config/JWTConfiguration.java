package com.backend.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class JWTConfiguration {

    // Hard coded, because, for some reason, these properties are not being readed on "application.properties"
    public static Long EXPIRATION = 3600000L;
    public static String KEY = "LibraryKEY";
    public static String PREFIX = "Bearer";

    public static void setEXPIRATION(Long eXPIRATION) {
        EXPIRATION = eXPIRATION;
    }

    public static void setKEY(String kEY) {
        KEY = kEY;
    }

    public static void setPREFIX(String pREFIX) {
        PREFIX = pREFIX;
    }

}
