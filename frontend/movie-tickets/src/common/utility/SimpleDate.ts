export class SimpleDate {

    public static isToday(date: Date): boolean {
        const today: Date = SimpleDate.today();

        return      date.getFullYear() === today.getFullYear()
                &&  date.getMonth() === today.getMonth()
                &&  date.getDate() === today.getDate();
    }

    public static today(): Date {
        return new Date();
    }

    public static plusDays(date: Date, daysToAdd: number): Date {
        const dateWithAddedDays: Date = new Date();
        const calculatedDate: number = date.getDate() + daysToAdd;
        dateWithAddedDays.setDate(calculatedDate);
        return dateWithAddedDays;
    }

}