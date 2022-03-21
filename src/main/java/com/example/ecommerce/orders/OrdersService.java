package com.example.ecommerce.orders;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersService {
    @Autowired
    private OrdersRepository ordersRepository;

    public void createCartItem(List<Orders> ordersItem){
        for (Orders order : ordersItem){
            ordersRepository.save(order);
        }
    }

    public List<Object[]> fetchOrders(int userId){
        return ordersRepository.findByUserId(userId);
    }

    public List<Orders> fetchOrdersById(String id){
        return ordersRepository.findByOrderId(id);
    }

}

