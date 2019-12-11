package com.jdb.flexhelp;

import java.util.Arrays;
import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.jdb.flexhelp.entities.Catalog;
import com.jdb.flexhelp.entities.Offer;
import com.jdb.flexhelp.entities.ServiceProvider;
import com.jdb.flexhelp.repositories.CatalogRepository;
import com.jdb.flexhelp.repositories.OfferRepository;
import com.jdb.flexhelp.repositories.ServiceProviderRepository;

@Component
public class Initializer implements CommandLineRunner {
	private final OfferRepository offerRepository;
	private final ServiceProviderRepository providerRepository;
	private final CatalogRepository catalogRepository;

	public Initializer(OfferRepository offerRepository, ServiceProviderRepository providerRepository,
			CatalogRepository catalogRepository) {
		super();
		this.offerRepository = offerRepository;
		this.providerRepository = providerRepository;
		this.catalogRepository = catalogRepository;
	}

	@Override
	public void run(String... args) throws Exception {
		Stream.of(100, 101, 102, 103, 104).forEach(id -> providerRepository
				.save(new ServiceProvider(id, null, "first" + id, "last" + id, "mail" + id + "@mail.com", "secret")));

		Stream.of(100, 101, 102, 103, 104).forEach(
				id -> catalogRepository.save(new Catalog(id, "title" + id, "desc_of_offer" + id, "unit_oz" + id)));

//		Catalog catalog1 = catalogRepository.findById(103).get();
//		ServiceProvider srvProvider1 = providerRepository.findById(101);

		int[] offers = new int[100];

		for (int i = 0; i < 100; i++) {
			offers[i] = i + 100;
		}
		// Arrays.stream(offers)
		Stream.of(100, 101, 102, 103, 104)
				.forEach(id -> offerRepository.save(new Offer(id, catalogRepository.findById(id % 5 + 100).get(),
						providerRepository.findById(id % 5 + 100).get(), id / 10, "location" + id, id - 10)));

		providerRepository.findAll().forEach(System.out::println);
	}

}
