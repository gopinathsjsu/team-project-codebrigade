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

                PricingContext seasonalPricingContext = new PricingContext( new SeasonalPricingStrategy());
                room.setPrice(seasonalPricingContext.executeSeasonBasedPricingStrategy( checkin, checkout, roomPrice));

                PricingContext roomsPricingContext = new PricingContext(new RoomsPricingStrategy());
                room.setPrice(roomsPricingContext.executeRoomAndGuestBasedPricingStrategy(numGuests, numRooms, roomPrice, room.getName()));

                PricingContext guestsPricingContext = new PricingContext(new GuestsPricingStrategy());
                room.setPrice(guestsPricingContext.executeRoomAndGuestBasedPricingStrategy(numGuests, numRooms, roomPrice, room.getName()));

                room.setPrice(roomPrice);
            }
        }
    }
}
