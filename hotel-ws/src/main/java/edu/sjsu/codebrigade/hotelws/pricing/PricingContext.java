package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public class PricingContext {
        private PricingStrategy pricingStrategy;

        public PricingContext(PricingStrategy pricingStrategy){
            this.pricingStrategy = pricingStrategy;
        }

        public int executeDayBasedPricingStrategy(int basePrice){
            return pricingStrategy.getPrice(basePrice);
        }

        public int executeSeasonBasedPricingStrategy(int basePrice){
            return pricingStrategy.getPrice(basePrice);
        }

        public int executeRoomAndGuestBasedPricingStrategy(int numberOfGuests, int numOfRooms, int basePrice){
            return pricingStrategy.getPrice(numberOfGuests, numOfRooms, basePrice);
        }

}
