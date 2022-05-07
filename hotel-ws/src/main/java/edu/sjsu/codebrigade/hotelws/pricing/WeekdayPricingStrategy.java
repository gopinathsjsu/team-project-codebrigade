package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public class WeekdayPricingStrategy extends PricingStrategy {

    @Override
    public int getPrice(int basePrice){
        return basePrice - 20;
    }

}
