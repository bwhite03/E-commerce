package com.example.ecommerce.orders;

public interface OrdersItem {
    Integer getId();
    Integer getUserId();
    Integer getProductId();
    Integer getQuantity();
    Integer getPrice();
    String getModel();
    String getImage();
    String getType();
    String getBrand();
    String getOrderId();
    String getDate();
}
