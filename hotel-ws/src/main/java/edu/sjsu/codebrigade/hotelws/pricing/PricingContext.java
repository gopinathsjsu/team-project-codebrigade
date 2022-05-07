package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public class PricingContext {
        private PricingStrategy pricingStrategy;

        public PricingContext(PricingStrategy pricingStrategy){
            this.pricingStrategy = pricingStrategy;
        }

        public int executeDayBasedPricingStrategy(LocalDate checkinDate, LocalDate checkoutDate){
            return pricingStrategy.getPrice(checkinDate, checkoutDate);
        }

        public int executeSeasonBasedPricingStrategy(LocalDate checkinDate, LocalDate checkoutDate){
            return pricingStrategy.getPrice(checkinDate, checkoutDate);
        }

        public int executeRoomAndGuestBasedPricingStrategy(int numberOfGuests, String roomType){
            return pricingStrategy.getPrice(numberOfGuests, roomType);
        }

}
