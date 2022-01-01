package com.example.ecommerce.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<DAOUser, Long> {
    DAOUser findByUsername(String username);


}
