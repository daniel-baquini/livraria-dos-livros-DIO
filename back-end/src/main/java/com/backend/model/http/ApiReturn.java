package com.backend.model.http;

public class ApiReturn<T> {
    
    private T data;
    private Boolean invalidJwt;

    public ApiReturn(T data) {
        this.data = data;
        this.invalidJwt = false;
    }

    public ApiReturn(T data, Boolean invalidJwt) {
        this(data);
        this.invalidJwt = invalidJwt;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Boolean getInvalidJwt() {
        return invalidJwt;
    }

    public void setInvalidJwt(Boolean invalidJwt) {
        this.invalidJwt = invalidJwt;
    }  

}
