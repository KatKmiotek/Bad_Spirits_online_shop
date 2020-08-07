package com.codeclanexample.server.models;

import java.util.ArrayList;
import java.util.List;

public class Order {

    private Long id;

    private User user;

    private List<Product> products;

    public Order(User user) {
        this.user = user;
        this.products = new ArrayList<Product>();
    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
