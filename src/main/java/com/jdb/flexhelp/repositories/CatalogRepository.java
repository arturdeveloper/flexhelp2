package com.jdb.flexhelp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jdb.flexhelp.entities.Catalog;

public interface CatalogRepository extends JpaRepository<Catalog, Integer> {

}