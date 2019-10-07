package com.jdb.flexhelp.entities;

import java.sql.Date;

import javax.persistence.Entity;
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
public class PurchaseOrder {

	@Id
	int orderId;

	@ManyToOne
//	Customer customer;
	User customer;

	@OneToOne
	Offer offer;

//	Date dateOrdered;

	// TODO: the total is calculated. Don't include this in constructor
	double totalPrice;

	// TODO: create two Date points. Don't include this in constructor
	Date orderStartDate;
	Date orderEndDate;

	// TODO: create two ratings fields. Don't include this in constructor
	int providerRating;
	int customerRating;
}
