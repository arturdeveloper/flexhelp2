package com.jdb.flexhelp.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdb.flexhelp.entities.Catalog;
import com.jdb.flexhelp.entities.Offer;
import com.jdb.flexhelp.repositories.CatalogRepository;
import com.jdb.flexhelp.repositories.OfferRepository;

@RestController
@RequestMapping("/api")
public class SearchController {

	private final Logger log = LoggerFactory.getLogger(SearchController.class);
	private OfferRepository offerRepository;
	private CatalogRepository catalogRepository;

	public SearchController(OfferRepository offerRepository, CatalogRepository catalogRepository) {
		super();
		this.offerRepository = offerRepository;
		this.catalogRepository = catalogRepository;
	}

	@GetMapping("/filters")
	Collection<Catalog> catalogItems() {
		return catalogRepository.findAll();
	}

//	@GetMapping("/offers/{id}")
//	ResponseEntity<?> getOffer(@PathVariable Integer id) {
//		Optional<Offer> offer = offerRepository.findById(id);
//		return offer.map(response -> ResponseEntity.ok().body(response))
//				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//	}

//	@PostMapping("/offer")
//	ResponseEntity<Offer> createOffer(@Valid @RequestBody Offer offer) throws URISyntaxException {
//		log.info("Request to create offer: {}", offer);
//		Offer result = offerRepository.save(offer);
//		return ResponseEntity.created(new URI("/api/offer/" + result.getOfferId())).body(result);
//	}
//
//	@PutMapping("/offer/{id}")
//	ResponseEntity<Offer> updateOffer(@Valid @RequestBody Offer offer) {
//		log.info("Request to update offer: {}", offer);
//		Offer result = offerRepository.save(offer);
//		return ResponseEntity.ok().body(result);
//	}
//
//	@DeleteMapping("/offer/{id}")
//	public ResponseEntity<?> deleteOffer(@PathVariable int id) {
//		log.info("Request to delete offer: {}", id);
//		offerRepository.deleteById(id);
//		return ResponseEntity.ok().build();
//	}
}