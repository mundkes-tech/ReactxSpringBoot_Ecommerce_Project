package com.ecommerce.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.repository.ProductRepo;


@Service
public class ProductService {

    private ProductRepo productRepo;

   public ProductService(ProductRepo productRepo){
        this.productRepo = productRepo;
    };
   
   public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public void addProduct(Product product){
        productRepo.save(product);
    }

}