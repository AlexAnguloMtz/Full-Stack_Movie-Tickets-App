const separator: string = '-';
const renderedSeparator: string = '/';

export class DateFormatter {

    static fromDropdownValueToDate(dateDropdownValue: string): Date {
        const yearMonthAndDay: string[] = dateDropdownValue.split(separator);
        const year: number = Number(yearMonthAndDay[0]);
        const month: number = Number(yearMonthAndDay[1]);
        const monthStartingFromZero = month - 1;
        const day: number = Number(yearMonthAndDay[2]);
        return new Date(year, monthStartingFromZero, day);
    }

    static formatForUrl(date: Date): string {
        const year: string = DateFormatter._exctractYear(date);
        const month: string = DateFormatter._extractMonth(date); 
        const day: string = DateFormatter._extractDay(date);
        return `${year}${separator}${month}${separator}${day}`;
    } 
  
    static fromDateToDropdownValue(date: Date): string {
        return DateFormatter.formatForUrl(date);
    }

    static formatRenderedDate(date: Date): string {
        const day: string = DateFormatter._extractDay(date);
        const monthName: string = DateFormatter._monthName(date);
        const year: string = DateFormatter._exctractYear(date);
        return `${monthName}${renderedSeparator}${day}${renderedSeparator}${year}`;
    }

    static _padWithZero(day: number): string {
        if(DateFormatter._hasOneDigit(day)) {
            return `0${day}`;
        }
        return String(day);
    }

    static _extractDay(date: Date): string {
        const day: number = date.getDate();
        return DateFormatter._padWithZero(day);
    }
    static _extractMonth(date: Date): string {
        const previousMonth: number = date.getMonth();
        const realMonth: number = previousMonth + 1;
        return DateFormatter._padWithZero(realMonth);
    }

    static _exctractYear(date: Date): string {
        return String(date.getFullYear())
    }

    static _hasOneDigit(day: number): boolean {
        return day > -10 && day < 10;
    }

    static _monthName(date: Date): string {
        const month = DateFormatter._extractMonth(date);
        let monthName: string = '';
        switch(month) {
            case '01': monthName = 'January';
                break;
            case '02': monthName = 'February';
                break;
            case '03': monthName = 'March';
                break;
            case '04': monthName = 'April';
                break;
            case '05': monthName = 'May';
                break;
            case '06': monthName = 'June';
                break;
            case '07': monthName = 'July';
                break;
            case '08': monthName = 'August';
                break;
            case '09': monthName = 'September';
                break;
            case '10': monthName = 'October';
                break;
            case '11': monthName = 'November';
                break;
            case '12': monthName = 'December';
                break;        
        }
        return monthName;
    }

}