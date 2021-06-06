/**
 * @description Create a function that takes a Roman numeral as 
 * its argument and returns its value as a numeric decimal integer. 
 * You don't need to validate the form of the Roman numeral. 
 * Modern Roman numerals are written by expressing each decimal digit 
 * of the number to be encoded separately, starting with the leftmost 
 * digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC)
 *  and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", 
 * uses each letter in descending order.
 * @link https://www.codewars.com/kata/51b6249c4612257ac0000005
 */

interface Roman {
    [key: string]: any;
    I: number,
    V: number,
    X: number,
    L: number,
    C: number,
    D: number,
    M: number
}
 
 const ROMAN_NUM: Roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanSolution(roman: string) {
    let c: number = 0;
    for (let i = roman.length - 1; i >= 0; i--) {
        if (i !== roman.length - 1 && ROMAN_NUM[roman.charAt(i + 1)] > ROMAN_NUM[roman.charAt(i)]) {
            c -= ROMAN_NUM[roman.charAt(i)];
        } else {
            c += ROMAN_NUM[roman.charAt(i)];
        }
    }
    return roman.split('').map(r=>ROMAN_NUM[r]).reduce((p,c) => p<c ? c-p : c+p);
}

function romanSolution2(roman: string) {
    return roman.split('').map(r=>ROMAN_NUM[r]).reduce((p,c) => p<c ? c-p : c+p);
}

export { romanSolution }