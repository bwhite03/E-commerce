package com.example.ecommerce.orders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Integer> {

    @Query(value = "SELECT COUNT(order_id), SUM(price)as price, order_id, date FROM orders WHERE user_id = ?1 " +
            "group by order_id;", nativeQuery = true)
    List<Object[]> findByUserId(int userId);

    List<Orders> findByOrderId(String id);

}
