package com.codeclanexample.server.models;


import java.util.ArrayList;
import java.util.List;

public class User {

    private Long id;
    private String name;
    private String address;
    private int age;
    private List<Order> orders;

    public User(String name, String address, int age) {
        this.name = name;
        this.address = address;
        this.age = age;
        this.orders = new ArrayList<Order>();
    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}
