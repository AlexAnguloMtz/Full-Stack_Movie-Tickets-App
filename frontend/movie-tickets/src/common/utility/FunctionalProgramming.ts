export class FunctionalProgramming {

    /* Returns an array filled with 
     * numbers from 0 to the specified value (exclusive)
     * 
     * @param {number} numberOfValues - Number of values that the final 
     *                                  array will contain. Must be a valid array length. 
     * 
     * @throws {RangeError} Will throw RangeError if argument is not a valid array length.
     * 
     */
    static range(numberOfValues: number): number[] {
        return [...Array(numberOfValues).keys()];
    }
    
}