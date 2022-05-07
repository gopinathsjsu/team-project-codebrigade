package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public interface PricingStrategy {
    public int getPrice(LocalDate checkinDate, LocalDate checkoutDate);

    public int getPrice(int numberOfGuests, String roomType);
}
