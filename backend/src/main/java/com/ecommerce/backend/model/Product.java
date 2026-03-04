package com.ecommerce.backend.model;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    private int id;
    private String product_name;
    private String description;
    private double price;
    private String brand;
    private String category;
    private Date release_date;
    private boolean availability;
    private int stock_quantity;

    // Image Info
    private String image_name;
    private String imageType;

    @Lob
    private byte[] imageData;
}