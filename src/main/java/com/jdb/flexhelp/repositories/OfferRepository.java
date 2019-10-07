package com.jdb.flexhelp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jdb.flexhelp.entities.Offer;

public interface OfferRepository extends JpaRepository<Offer, Integer> {

}