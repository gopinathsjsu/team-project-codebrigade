package edu.sjsu.codebrigade.hotelws.controller;

import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import edu.sjsu.codebrigade.hotelws.persistence.Room;
import edu.sjsu.codebrigade.hotelws.pricing.HolidayPricingStrategy;
import edu.sjsu.codebrigade.hotelws.pricing.PricingContext;
import edu.sjsu.codebrigade.hotelws.pricing.WeekdayPricingStrategy;
import edu.sjsu.codebrigade.hotelws.pricing.WeekendPricingStrategy;
import edu.sjsu.codebrigade.hotelws.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@RestController
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @GetMapping("/hotel")
    public ResponseEntity<List<Hotel>> get(@RequestParam(value = "name", defaultValue = "Marriott") String name) {
        List<Hotel> hotels = hotelService.getAllHotels();
        return ResponseEntity.ok().body(hotels);
    }

    @GetMapping("/hotel/{cityName}")
    public ResponseEntity<List<Hotel>> getHotels(@PathVariable String cityName,
                                                 @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkinDate,
                                                 @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkoutDate,
                                                 @RequestParam(required = false) int numRooms,
                                                 @RequestParam(required = false) int numGuests) {
        List<Hotel> hotels = hotelService.getHotelsByCity(cityName);

        for(Hotel hotel: hotels){
            Set<Room> roomList = hotel.getRooms();
            for(Room room : roomList){

                int roomPrice = room.getPrice();
                PricingContext weekendPricingContext = new PricingContext(new WeekendPricingStrategy());
                roomPrice = weekendPricingContext.executeDayBasedPricingStrategy(checkinDate, checkoutDate, roomPrice);

                PricingContext weekdayPricingContext = new PricingContext(new WeekdayPricingStrategy());
                roomPrice = weekdayPricingContext.executeDayBasedPricingStrategy(checkinDate, checkoutDate, roomPrice);

                PricingContext holidayPricingContext = new PricingContext(new HolidayPricingStrategy());
                roomPrice = holidayPricingContext.executeDayBasedPricingStrategy(checkinDate, checkoutDate, roomPrice);

                room.setPrice(roomPrice);
            }
        }

        return ResponseEntity.ok().body(hotels);
    }

    @GetMapping("/hotel/room/{roomId}")
    public ResponseEntity<List<Hotel>> getHotelsByRoomId(@PathVariable int roomId) {
        List<Hotel> hotels = hotelService.getHotelsByRoomId(roomId);
        return ResponseEntity.ok().body(hotels);
    }


}