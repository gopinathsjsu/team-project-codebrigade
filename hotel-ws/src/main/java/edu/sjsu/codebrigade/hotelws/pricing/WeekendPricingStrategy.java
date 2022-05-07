package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public class WeekendPricingStrategy extends PricingStrategy {

    public int getPrice(int basePrice){
        return basePrice + 30;
    }

}
