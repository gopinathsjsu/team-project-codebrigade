package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.ChronoField;

public class WeekdayPricingStrategy extends PricingStrategy {

    @Override
    public int getPrice(LocalDate checkinDate, LocalDate checkoutDate, int basePrice){
        if(isWeekday(checkinDate) || isWeekday(checkoutDate)){
            return basePrice - 20;
        }
        return basePrice;
    }

    public static boolean isWeekday(final LocalDate ld)
    {
        DayOfWeek day = DayOfWeek.of(ld.get(ChronoField.DAY_OF_WEEK));
        return day != DayOfWeek.SUNDAY && day != DayOfWeek.SATURDAY;
    }

}
