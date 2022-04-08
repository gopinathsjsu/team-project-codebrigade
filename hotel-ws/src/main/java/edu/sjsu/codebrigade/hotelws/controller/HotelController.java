package edu.sjsu.codebrigade.hotelws.controller;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.sjsu.codebrigade.hotelws.service.HotelService;

@RestController
public class HotelController {

    private final AtomicInteger counter = new AtomicInteger();

    @Autowired
    private HotelService hotelService;

    @GetMapping("/hotel")
    public String get(@RequestParam(value = "name", defaultValue = "Marriott") String name) {
        //return new Hotel(counter.incrementAndGet(), name);
        return "success";
    }

    @GetMapping("/hotel/{cityName}")
    public ResponseEntity<List<Hotel>> getHotels(@PathVariable String cityName) {
        return (ResponseEntity<List<Hotel>>) ResponseEntity.ok()
                .header("Custom-Header", "<header>")
                .body(hotelService.getHotelsByCity(cityName));
    }
}