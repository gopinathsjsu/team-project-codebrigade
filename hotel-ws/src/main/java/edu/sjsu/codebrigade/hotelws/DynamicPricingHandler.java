package edu.sjsu.codebrigade.hotelws;

import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import edu.sjsu.codebrigade.hotelws.persistence.Room;
import edu.sjsu.codebrigade.hotelws.pricing.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public class DynamicPricingHandler {

    public void updatePrices(List<Hotel> hotels, LocalDate checkin, LocalDate checkout, int numRooms, int numGuests){
        for(Hotel hotel: hotels){
            Set<Room> roomList = hotel.getRooms();
            for(Room room : roomList){

                int roomPrice = room.getPrice();
                PricingContext weekendPricingContext = new PricingContext(new WeekendPricingStrategy());
                roomPrice = weekendPricingContext.executeDayBasedPricingStrategy(checkin, checkout, roomPrice);

                PricingContext weekdayPricingContext = new PricingContext(new WeekdayPricingStrategy());
                roomPrice = weekdayPricingContext.executeDayBasedPricingStrategy(checkin, checkout, roomPrice);

                PricingContext holidayPricingContext = new PricingContext(new HolidayPricingStrategy());
                roomPrice = holidayPricingContext.executeDayBasedPricingStrategy(checkin, checkout, roomPrice);

                PricingContext pricingContext = new PricingContext( new SeasonalPricingStrategy());
                room.setPrice(pricingContext.executeSeasonBasedPricingStrategy( checkin, checkout, roomPrice));

                room.setPrice(roomPrice);
            }
        }
    }
}
