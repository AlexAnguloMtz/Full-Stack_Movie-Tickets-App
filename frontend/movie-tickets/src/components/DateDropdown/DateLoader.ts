import { FunctionalProgramming } from "../../common/utility/FunctionalProgramming";
import { Validator } from "../../common/utility/Validator";
import { SimpleDate } from "../../common/utility/SimpleDate";

export class DateLoader {

    public static loadDatesStartingOn = (aDate: Date, numberOfDates:number): Date[] => {
        Validator.checkNonNegativeInteger(numberOfDates, 'Number of dates must be a non negative integer');
        return FunctionalProgramming.range(numberOfDates)
            .map(value => SimpleDate.plusDays(aDate, value));
    }
   
}