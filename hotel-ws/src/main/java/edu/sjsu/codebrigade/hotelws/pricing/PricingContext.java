package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public class PricingContext {
        private PricingStrategy pricingStrategy;

        public PricingContext(PricingStrategy pricingStrategy){
            this.pricingStrategy = pricingStrategy;
        }

        public int executeDayBasedPricingStrategy(LocalDate checkinDate, LocalDate checkoutDate, int basePrice){
            return pricingStrategy.getPrice(checkinDate, checkoutDate, basePrice);
        }

        public int executeSeasonBasedPricingStrategy(LocalDate checkinDate, LocalDate checkoutDate, int basePrice){
            return pricingStrategy.getPrice(checkinDate, checkoutDate, basePrice);
        }

        public int executeRoomAndGuestBasedPricingStrategy(int numberOfGuests, int numOfRooms, int basePrice){
            return pricingStrategy.getPrice(numberOfGuests, numOfRooms, basePrice);
        }

}
