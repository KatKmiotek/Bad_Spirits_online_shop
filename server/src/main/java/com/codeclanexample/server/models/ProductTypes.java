package com.codeclanexample.server.models;

public enum ProductTypes {

    BEER("Beer"),
    RUM("Rum"),
    GIN("Gin"),
    WINE("Wine");

    private final String value;


    ProductTypes(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
