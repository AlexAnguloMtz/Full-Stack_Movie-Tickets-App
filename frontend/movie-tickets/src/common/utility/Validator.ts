export class Validator {
    
    static checkNonNegativeInteger(number: number, message: string) {
        Validator.checkIsInteger(number, message);
        Validator.checkNonNegative(number, message);
        return number;
    }

    static checkIsInteger(number: number, message: string): number {
        if(number % 1 !== 0) {
            throw new Error(message);
        }
        return number;
    }

    static checkNonNegative(number: number, message: string): number {
        if(number < 0) {
            throw new Error(message);
        }
        return number;
    }

}