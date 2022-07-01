import { FunctionalProgramming } from "../../common/utility/FunctionalProgramming";
import { Validator } from "../../common/utility/Validator";

export class DateLoader {

    static loadDatesStartingOn = (aDate: Date, numberOfDates:number): Date[] => {
        Validator.checkNonNegativeInteger(numberOfDates, 'Number of dates must be a non negative integer');
        return FunctionalProgramming.range(numberOfDates)
            .map(value => DateLoader._plusDays(aDate, value));
    }

    static _plusDays(date: Date, daysToAdd: number): Date {
        const dateWithAddedDays: Date = new Date();
        const calculatedDate: number = date.getDate() + daysToAdd;
        dateWithAddedDays.setDate(calculatedDate);
        return dateWithAddedDays;
    }

   
}