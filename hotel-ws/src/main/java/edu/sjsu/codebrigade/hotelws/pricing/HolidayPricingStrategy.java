package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public class HolidayPricingStrategy extends PricingStrategy {

    @Override
    public int getPrice(LocalDate checkinDate, LocalDate checkoutDate, int basePrice){
        return basePrice + 50;
    }

}
