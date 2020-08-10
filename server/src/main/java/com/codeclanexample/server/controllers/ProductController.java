package com.codeclanexample.server.controllers;

import com.codeclanexample.server.models.Product;
import com.codeclanexample.server.models.ProductTypes;
import com.codeclanexample.server.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    ProductRepository productRepository;
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "/products")
    public ResponseEntity<List<Product>> getAllProducts(
            @RequestParam(name="name", required = false) String name
    ){
        if( name != null){
            return new ResponseEntity<>(productRepository.findByNameContainingAllIgnoreCase(name), HttpStatus.OK);
        }
        return new ResponseEntity<>(productRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/products/{id}")
    public ResponseEntity<Optional<Product>> getProduct(@PathVariable Long id){
        return new ResponseEntity(productRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/products")
    public ResponseEntity<Product> postProduct(@RequestBody Product product){
        productRepository.save(product);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping(value = "/products/find/{category}")
    public ResponseEntity<Optional<Product>> getProductByCategory(@PathVariable ProductTypes category){
        return new ResponseEntity(productRepository.findByCategory(category), HttpStatus.OK);
    }

    @RequestMapping(value = "/products/edit/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Product> updateProduct(@RequestBody Product product, @PathVariable long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if (!productOptional.isPresent())
            return ResponseEntity.notFound().build();
        product.setId(id);
        productRepository.save(product);
        return ResponseEntity.noContent().build();
    }

}

