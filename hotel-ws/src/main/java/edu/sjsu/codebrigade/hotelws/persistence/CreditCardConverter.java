package edu.sjsu.codebrigade.hotelws.persistence;

import javax.persistence.AttributeConverter;

public class CreditCardConverter implements AttributeConverter<String, String> {
    @Override
    public String convertToDatabaseColumn(String s) {
        return s;
    }

    @Override
    public String convertToEntityAttribute(String s) {
        return s.replaceAll("\\d", "*");
    }
}
