package com.zughy.tibia_api.service;

import com.zughy.tibia_api.dto.Char;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TibiaApiService {

    private final RestTemplate restTemplate;

    @Value("${tibia.api.url}")
    private String TIBIA_API_URL;
    

    @Autowired
    public TibiaApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }


    public Char getCharacterByName(String name) {
        String url = TIBIA_API_URL + "/v4/character/{name}";


        Char response = restTemplate.getForObject(
            url,
            Char.class,
            name
        );
        
        return response;
    }
}