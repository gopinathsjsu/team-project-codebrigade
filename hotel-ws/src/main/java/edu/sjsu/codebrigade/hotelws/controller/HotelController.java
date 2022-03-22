package edu.sjsu.codebrigade.hotelws.controller;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.sjsu.codebrigade.hotelws.service.HotelService;

@RestController
public class HotelController {

    private final AtomicLong counter = new AtomicLong();

    @Autowired
    private HotelService hotelService;

    @GetMapping("/hotel")
    public Hotel get(@RequestParam(value = "name", defaultValue = "Marriott") String name) {
        return new Hotel(counter.incrementAndGet(), name);
    }

    @GetMapping("/hotel/get")
    public ResponseEntity<List<Hotel>> getHotels(@RequestParam(value = "cityId") int cityId) {
        return new ResponseEntity<List<Hotel>>(hotelService.getHotelsByCity(cityId), HttpStatus.OK);
    }
}