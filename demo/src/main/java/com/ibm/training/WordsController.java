package com.ibm.training;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WordsController {
	
	@Autowired
	WordRestClient wordClient;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/synonym/{orig}")
	String synonymGet(@PathVariable String orig) {
		return wordClient.getSynonyms(orig);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/plural/{orig}")
	String pluralGet(@PathVariable String orig) {
		return wordClient.getPlural(orig);
	}
}
