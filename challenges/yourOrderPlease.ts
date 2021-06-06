/**
 * @description our task is to sort a given string. 
 * Each word in the string will contain a single number. 
 * This number is the position the word should have in the result. 
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). 
 * If the input string is empty, return an empty string. 
 * The words in the input String will only contain valid consecutive numbers.
 * @link https://www.codewars.com/kata/55c45be3b2079eccff00010f
 */

function order(words:string): string {
    return words.split(" ").sort(compare).join(" ");
}

function compare(a: string, b: string) {
    let n1: number = (a.search(/\d+/g) !== -1) ? parseInt(a.match(/\d+/g)![0]) : 0;
    let n2: number = (b.search(/\d+/g) !== -1) ? parseInt(b.match(/\d+/g)![0]) : 0;
    return n1 - n2;
}

export { order }