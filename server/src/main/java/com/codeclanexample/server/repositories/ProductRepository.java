package com.codeclanexample.server.repositories;

import com.codeclanexample.server.models.Product;
import com.codeclanexample.server.models.ProductTypes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategory(ProductTypes category);
    List<Product> findByNameContainingAllIgnoreCase(String search);
    List<Product> findAllByOrderByNameAsc();
}
