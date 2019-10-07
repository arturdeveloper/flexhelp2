//package com.jdb.flexhelp.repositories;
//
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.jdb.flexhelp.entities.Offer;
//import com.jdb.flexhelp.entities.User;
//
//public interface UserSessionRepository extends JpaRepository<User, String> {
//	List<Offer> findAllByUserId(String id);
//}