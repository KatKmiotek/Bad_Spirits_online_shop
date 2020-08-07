package com.codeclanexample.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="measurement")
    private int measurement;

    @Column(name="stock")
    private int stock;

    @Column(name="price")
    private double price;

    @Column(name="description")
    private String description;

    @Column(name="location")
    private String location;

    @Column(name="percent")
    private double percent;

    @Column(name="type")
    private String type;

    @Column(name="category")
    private ProductTypes category;

    private String image;

    @ManyToMany
    @JsonIgnoreProperties({"products"})
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "order_products",
            joinColumns = {@JoinColumn(name = "product_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="order_id", nullable = false, updatable = false)}
    )
    private List<Order> orders;

    public Product(String name, int measurement, int stock, double price, String description, String location, double percent, String type, ProductTypes category, String image) {
        this.name = name;
        this.measurement = measurement;
        this.stock = stock;
        this.price = price;
        this.description = description;
        this.location = location;
        this.percent = percent;
        this.type = type;
        this.category = category;
        this.orders = new ArrayList<Order>();
        this.image = image;
    }

    public Product() {
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
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

    public int getMeasurement() {
        return measurement;
    }

    public void setMeasurement(int measurement) {
        this.measurement = measurement;
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

    public ProductTypes getCategory() {
        return category;
    }

    public void setCategory(ProductTypes category) {
        this.category = category;
    }
}
