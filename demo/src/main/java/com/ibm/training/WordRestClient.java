package com.ibm.training;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

@Component
public class WordRestClient {

	@Value("${rapidapi.words.url}")
	String wordsUrl;
	
	@Value("${rapidapi.key.name}")
	String apiKeyName;
	
	@Value("${rapidapi.key.value}")
	String apiKeyValue;
	
	@Value("${rapidapi.host.name}")
	String hostName;
	
	@Value("${rapidapi.host.words.value}")
	String hostValue;
	
	public String getSynonyms(String orig) {
		try {
			HttpResponse<String> response = Unirest.get(wordsUrl + orig + "/synonyms")
					.header(hostName, hostValue)
					.header(apiKeyName, apiKeyValue)
					.asString();
			return(response.getBody());
		} catch (UnirestException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	
}
