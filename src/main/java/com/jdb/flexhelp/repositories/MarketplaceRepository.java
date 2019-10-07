package com.jdb.flexhelp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jdb.flexhelp.entities.PurchaseOrder;

public interface MarketplaceRepository extends JpaRepository<PurchaseOrder, Integer> {

}