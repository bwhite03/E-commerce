package com.example.ecommerce.wishlist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WishListRepository extends JpaRepository<WishList, Integer> {

    @Query(value = "SELECT p.id, p.model, p.price, p.image, p.type, p.brand from wish_list w\n" +
            "JOIN product p ON (w.product_id = p.id)\n" +
            "where w.user_id = ?1", nativeQuery = true)
    List<WishListItem> findAll(int userId);

    WishList findByProductId(int id);
}