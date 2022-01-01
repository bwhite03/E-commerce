package com.example.ecommerce.cart;

public interface CartItem {
    Integer getId();
    String getModel();
    Integer getPrice();
    String getImage();
    String getType();
    String getBrand();
    Integer getQuantity();
}
