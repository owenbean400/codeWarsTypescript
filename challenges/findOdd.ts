/**
 * @description Given an array of integers, 
 * find the one that appears an odd number of times.
 * @link https://www.codewars.com/kata/54da5a58ea159efa38000836
 */

function findOdd(xs: number[]): number {
    for(let n of xs) {
        if(xs.filter(t => t === n).length % 2 === 1) {
            return n;
        }
    }
    throw new Error("There no number shown old number of times!");
};

export { findOdd }