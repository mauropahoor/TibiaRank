package com.zughy.tibia_api.controller;

import com.zughy.tibia_api.dto.Char;
import com.zughy.tibia_api.service.TibiaApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api/external")
public class ExternalApiController {

    private final TibiaApiService tibiaApiService;

    @Autowired
    public ExternalApiController(TibiaApiService tibiaApiService) {
        this.tibiaApiService = tibiaApiService;
    }

    @GetMapping("/characters")
    public List<Char> fetchCharacters() {
        return tibiaApiService.getExternalCharacters();
    }
}