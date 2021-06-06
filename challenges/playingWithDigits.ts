/**
 * @description 
 * Given a positive integer n written as abcd... 
 * (a, b, c, d... being digits) and a positive integer p
 * @link https://www.codewars.com/kata/5552101f47fc5178b1000050
 */

function playingWithDigits(n: number, p: number): number {
    let digits: number[] = Array.from(n.toString()).map(Number);
    let exp: number = 0;
    for (let i = 0; i < digits.length; i++)
        exp += Math.pow(digits[i], i + p);
    return exp % n === 0 ? exp/n : -1;
}

export { playingWithDigits }