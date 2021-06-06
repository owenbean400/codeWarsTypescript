/**
 * @description Write a function that takes an integer as input, 
 * and returns the number of bits that are equal to one in the binary representation of that number. 
 * You can guarantee that input is non-negative.
 * @link https://www.codewars.com/kata/526571aae218b8ee490006f4
 */

function countBits(n: number): number {
    let count: number = 0;
    for (let l of n.toString(2)) {
        if (l === "1")
            count++;
    }
    return count;
}

function countBits2(n: number): number {
    return n.toString(2).replace(/0/g, '').length;
}

export {countBits2, countBits}