package com.example.ecommerce.orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class OrdersController {
    @Autowired
    private OrdersService ordersService;

    @PostMapping("/addToOrders")
    public void createCartItem(@RequestBody List<Orders> ordersItem) {
         ordersService.createCartItem(ordersItem);
    }

    @GetMapping("/fetchOrders")
    public List<Object[]> getOrders(@RequestParam int userId) {
        return ordersService.fetchOrders(userId);
    }

    @GetMapping("/fetchOrder/{id}")
    public List<Orders> getOrder(@PathVariable String id) {
        return ordersService.fetchOrdersById(id);
    }
}
