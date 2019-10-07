package com.jdb.flexhelp.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Offer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int offerId;

	@OneToOne(cascade = CascadeType.DETACH)
	Catalog catalog;

	@ManyToOne(fetch = FetchType.EAGER, cascade=CascadeType.PERSIST)
	ServiceProvider srvProvider;

	double price; // per unit

	String location;

	int discountCriteria;

	// TODO: discount/acceptance points based on Customer "reputation"
//	@OneToOne(cascade = CascadeType.PERSIST)
//	CustomerCriteria criteria;

//	 TODO: add this props directly to this class. No need for intermediate class.
//	int availableQuantity;
//  Date availableDate

}
