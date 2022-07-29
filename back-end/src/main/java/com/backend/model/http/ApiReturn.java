package com.backend.model.http;

public class ApiReturn<T> {
    
    private T data;

    public ApiReturn(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }  

}
