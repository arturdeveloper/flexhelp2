package com.jdb.flexhelp.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Catalog {

	@Id
	int catalogId;

	String catalogTitle;
	String catalogDescription;
	String measurementUnit;
}
