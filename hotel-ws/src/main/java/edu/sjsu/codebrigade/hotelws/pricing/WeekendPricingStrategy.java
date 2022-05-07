package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public class WeekendPricingStrategy extends PricingStrategy {

    public int getPrice(LocalDate checkinDate, LocalDate checkoutDate, int basePrice){
        return basePrice + 30;
    }

}
