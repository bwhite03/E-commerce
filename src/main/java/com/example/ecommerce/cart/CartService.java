package com.example.ecommerce.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public List<CartItem> findAll(int userId){
        return cartRepository.findAll(userId);
    }

    public Cart findByProductId(int id) {
        return cartRepository.findByProductId(id);
    }

    public void removeAllUserCartItems(int userId){
        List<Cart> cartItem = cartRepository.findByUserId(userId);

        for (Cart cart : cartItem){
            cartRepository.delete(cart);
        }
    }

    public void removeUserCartItem(int id){
        Cart cartItem = cartRepository.findByProductId(id);
        cartRepository.delete(cartItem);
    }

    public void addToCart(Cart cartItem){
        cartRepository.save(cartItem);
    }

    public void updateUserCartItems(Cart cartItem){
        Cart newItem = cartRepository.findByProductId(cartItem.getId());
        newItem.setQuantity(cartItem.getQuantity());
        cartRepository.save(newItem);
    }
}
