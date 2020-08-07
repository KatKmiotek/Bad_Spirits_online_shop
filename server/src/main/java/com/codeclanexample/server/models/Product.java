package com.codeclanexample.server.models;

public class Product {

    private Long id;

    private String name;

    private int measurment;

    private int stock;

    private double price;

    private String description;

    private String location;

    private double percent;

    private String type;

    private String category;

    public Product(String name, int measurment, int stock, double price, String description, String location, double percent, String type, String category) {
        this.name = name;
        this.measurment = measurment;
        this.stock = stock;
        this.price = price;
        this.description = description;
        this.location = location;
        this.percent = percent;
        this.type = type;
        this.category = category;
    }

    public Product() {
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

    public int getMeasurment() {
        return measurment;
    }

    public void setMeasurment(int measurment) {
        this.measurment = measurment;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getPercent() {
        return percent;
    }

    public void setPercent(double percent) {
        this.percent = percent;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
