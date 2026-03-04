package com.ecommerce.backend.service;

import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.repository.ProductRepo;

@Service
public class ProductService {

    private ProductRepo productRepo;

    public ProductService(ProductRepo productRepo){
        this.productRepo = productRepo;
    }

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public void addProduct(Product product, MultipartFile image) throws IOException {

        product.setImage_name(image.getOriginalFilename());
        product.setImageType(image.getContentType());
        product.setImageData(image.getBytes());

        productRepo.save(product);
    }

    public Product getProductById(int id){
        return productRepo.findById(id).orElse(null);
    }
}