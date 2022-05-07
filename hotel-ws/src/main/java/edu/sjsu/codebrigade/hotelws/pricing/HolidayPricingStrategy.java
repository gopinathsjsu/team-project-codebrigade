package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class HolidayPricingStrategy extends PricingStrategy {

    Set<LocalDate> holidaySet = (Set<LocalDate>) Collections.unmodifiableSet(
            new HashSet<>(Arrays.asList(
                    LocalDate.parse("2022-06-18"),
                    LocalDate.parse("2022-07-08"),
                    LocalDate.parse("2022-08-08"),
                    LocalDate.parse("2022-09-08"),
                    LocalDate.parse("2022-10-08"),
                    LocalDate.parse("2022-11-08"),
                    LocalDate.parse("2022-12-25")
                    )));

    @Override
    public int getPrice(LocalDate checkinDate, LocalDate checkoutDate, int basePrice){
        if(holidaySet.contains(checkinDate) || holidaySet.contains(checkoutDate)){
            return basePrice + 100;
        }
        return basePrice;
    }

}
