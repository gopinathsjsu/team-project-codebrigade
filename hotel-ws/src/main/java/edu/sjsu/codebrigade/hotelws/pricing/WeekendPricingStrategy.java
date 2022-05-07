package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.ChronoField;

public class WeekendPricingStrategy extends PricingStrategy {

    public int getPrice(LocalDate checkinDate, LocalDate checkoutDate, int basePrice){
        if(isWeekend(checkinDate) || isWeekend(checkoutDate)){
            return basePrice + 30;
        }
        return basePrice;
    }

    public static boolean isWeekend(final LocalDate ld)
    {
        DayOfWeek day = DayOfWeek.of(ld.get(ChronoField.DAY_OF_WEEK));
        return day == DayOfWeek.SUNDAY || day == DayOfWeek.SATURDAY;
    }
}
