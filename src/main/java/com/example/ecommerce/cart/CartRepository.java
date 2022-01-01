package com.example.ecommerce.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Integer>{

    @Query(value = "SELECT p.id, p.model, p.price, p.image, p.type, p.brand, c.quantity from cart c\n" +
            "JOIN product p ON (c.product_id = p.id)\n" +
            "where c.user_id = ?1", nativeQuery = true)
    List<CartItem> findAll(int userId);

   Cart findByProductId(int id);
}


