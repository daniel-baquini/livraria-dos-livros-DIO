package com.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    // This is called "JPQL" (Java Persistence Query Language). It's used to get data
    // from a database.
    //
    // "JOIN FETCH" is specific to JPA (is not a SQL join). It is used to load
    // an entity and it's dependencies.
    //
    // Hint: ALWAYS test query on SQL before putting here. There was a previous error:
    // Was written "SEELECT" instead of "SELECT".
    @Query("SELECT e FROM User e JOIN FETCH e.roles WHERE e.username = (:username)")
    public User findByUsername(@Param ("username") String username);

}
