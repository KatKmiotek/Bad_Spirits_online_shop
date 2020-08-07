package com.codeclanexample.server.components;

import com.codeclanexample.server.models.Product;
import com.codeclanexample.server.repositories.OrderRepository;
import com.codeclanexample.server.repositories.ProductRepository;
import com.codeclanexample.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Product wine1 = new Product()

    }
}
