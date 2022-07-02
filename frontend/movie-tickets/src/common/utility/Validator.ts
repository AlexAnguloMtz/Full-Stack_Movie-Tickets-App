export class Validator {
    
    public static checkNonNegativeInteger(number: number, message: string) {
        Validator.checkIsInteger(number, message);
        Validator.checkNonNegative(number, message);
        return number;
    }

    public static checkIsInteger(number: number, message: string): number {
        if(number % 1 !== 0) {
            throw new Error(message);
        }
        return number;
    }

    public static checkNonNegative(number: number, message: string): number {
        if(number < 0) {
            throw new Error(message);
        }
        return number;
    }

}