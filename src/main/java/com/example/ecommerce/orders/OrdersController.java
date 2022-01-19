package com.example.ecommerce.orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class OrdersController {
    @Autowired
    private OrdersRepository OrdersRepository;

    @PostMapping("/addToOrders")
    public void createCartItem(@RequestBody List<Orders> ordersItem) {

        for (Orders order : ordersItem){
            OrdersRepository.save(order);
        }
    }

    @GetMapping("/fetchOrders")
    public List<Object[]> getOrders(@RequestParam int userId) {
        return OrdersRepository.findByUserId(userId);
    }

    @GetMapping("/fetchOrder/{id}")
    public List<Orders> getOrder(@PathVariable String id) {
        return OrdersRepository.findByOrderId(id);
    }
}
