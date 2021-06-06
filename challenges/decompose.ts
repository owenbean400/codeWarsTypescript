/**
 * @description My little sister came back home from school with the following task: 
 * given a squared sheet of paper she has to cut it in pieces which, when assembled, 
 * give squares the sides of which form an increasing sequence of numbers. 
 * At the beginning it was lot of fun but little by little we were tired of seeing the pile of torn paper. 
 * So we decided to write a program that could help us and protects trees.
 * @link https://www.codewars.com/kata/54eb33e5bc1a25440d000891
 */

function decompose(n: number): number[] {
    let arr: number[] = [];
    if (canDecomp(n, arr, n)) {
        return arr;
    }
    return null;
}

export {decompose}

function canDecomp(n: number, arr: number[], orgin: number): boolean {
    let c = Math.pow(orgin, 2) - arr.map(a => Math.pow(a, 2)).reduce((x, y) => x + y, 0);
    //base cases
    if (c === 0)
        return true;
    if (orgin <= 0)
        return false;

    //check each number before it
    for (let i = Math.floor(Math.sqrt(c)); i > 0; i--) {
        if (isSorted(arr, i) && i !== orgin) {
            arr.unshift(i); //add to array
            if (canDecomp(i - 1, arr, orgin) === true)
                return true
            arr.shift(); //backtrack
        }
    }
    return false;
}

function isSorted(arr: number[], n: number): boolean {
    if (arr.length === 0) {
        return true;
    }
    if (n >= arr[0]) {
        return false;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1])
            return false;
    }
    return true;
}