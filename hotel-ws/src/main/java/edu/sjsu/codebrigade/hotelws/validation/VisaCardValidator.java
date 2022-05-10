package edu.sjsu.codebrigade.hotelws.validation;

import java.math.BigDecimal;

public class VisaCardValidator extends CardValidator {

    public VisaCardValidator(CardValidator nextCardValidator) {
        super(nextCardValidator);
    }

    @Override
    public boolean isValidCard(BigDecimal paymentCardNumber) {
        String cardNumber = paymentCardNumber.toPlainString();
        if (cardNumber.startsWith("4") && (cardNumber.length() == 13 || cardNumber.length() == 16)) {
            return true;
        } else if (nextCardValidator != null) {
            return nextCardValidator.isValidCard(paymentCardNumber);
        }
        return false;
    }
}