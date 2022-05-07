package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public abstract class PricingStrategy {
    public int getPrice(LocalDate checkinDate, LocalDate checkoutDate, int basePrice){
        return basePrice;
    }

    public int getPrice(int numberOfGuests, int numOfRooms, int basePrice){
        return basePrice;
    }
}
