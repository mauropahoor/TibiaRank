package com.zughy.tibia_api.service;

import com.zughy.tibia_api.dto.Char;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Arrays;
import java.util.List;

@Service
public class TibiaApiService {

    private final RestTemplate restTemplate;

    private final String TIBIA_API_URL = "https://api.tibia-externa.com/v1/characters";

    @Autowired
    public TibiaApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Char> getExternalCharacters() {
        Char[] charactersArray = restTemplate.getForObject(
            TIBIA_API_URL, 
            Char[].class
        );

        if (charactersArray != null) {
            return Arrays.asList(charactersArray);
        }
        
        return List.of();
    }
}