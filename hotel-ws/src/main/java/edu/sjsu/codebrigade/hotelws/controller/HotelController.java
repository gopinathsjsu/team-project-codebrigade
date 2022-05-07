package edu.sjsu.codebrigade.hotelws.controller;

import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import edu.sjsu.codebrigade.hotelws.persistence.Room;
import edu.sjsu.codebrigade.hotelws.pricing.PricingContext;
import edu.sjsu.codebrigade.hotelws.pricing.SeasonalPricingStrategy;
import edu.sjsu.codebrigade.hotelws.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.ChronoField;
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
                                                 @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkin,
                                                 @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkout,
                                                 @RequestParam(required = false) int numRooms,
                                                 @RequestParam(required = false) int numGuests) {
        List<Hotel> hotels = hotelService.getHotelsByCity(cityName);
        PricingContext pricingContext = new PricingContext( new SeasonalPricingStrategy());
        for(Hotel hotel: hotels){
            hotel.setPrice(pricingContext.executeSeasonBasedPricingStrategy( checkin, checkout, hotel.getPrice()));
            Set<Room> roomList = hotel.getRooms();
            for(Room room : roomList){
                room.setPrice(pricingContext.executeSeasonBasedPricingStrategy( checkin, checkout, room.getPrice()));
            }
        }
        return ResponseEntity.ok().body(hotels);
    }

    @GetMapping("/hotel/room/{roomId}")
    public ResponseEntity<List<Hotel>> getHotelsByRoomId(@PathVariable int roomId) {
        List<Hotel> hotels = hotelService.getHotelsByRoomId(roomId);
        return ResponseEntity.ok().body(hotels);
    }

    public static boolean isWeekend(final LocalDate ld)
    {
        DayOfWeek day = DayOfWeek.of(ld.get(ChronoField.DAY_OF_WEEK));
        return day == DayOfWeek.SUNDAY || day == DayOfWeek.SATURDAY;
    }
}