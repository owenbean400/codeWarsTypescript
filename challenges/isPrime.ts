/**
 * @description The prime numbers are not regularly spaced. 
 * For example from 2 to 3 the gap is 1. 
 * From 3 to 5 the gap is 2. From 7 to 11 it is 4. 
 * Between 2 and 50 we have the following pairs of 2-gaps primes: 
 * 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
 * @link https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4
 */

let steps: number = 0;

function gap(g: number, m: number, n: number): number[] {
    let lower: number;
    while(m <= n) {
        if(isPrime(m)) {
            if(m - lower == g)
                return [lower, m];
            lower = m;
        }
        m++;
    }
    return null;
}

function isPrime(num: number): boolean {
    if (num % 2 == 0)
        return false;
    if (num % 3 == 0)
        return false;
    for (let i = 6; i <= Math.ceil(Math.sqrt(num)); i += 6) {
        if (num % (i - 1) == 0)
            return false;
        if (num % (i + 1) == 0)
            return false;
    }
    return true;
}

function isPrime2(num: number) {
    const iteration: number = 1;
    let a: number = Math.floor(Math.random() * (num / 2));
    steps++;
    if (gcf(a , num) == 1) {
        do  {
            if (Math.pow(a, num - 1) % num == 1) {
                return true;
            }
            a = Math.floor(Math.random() * (num - 2));
            steps++;
        } while (iteration > 0);
    } else {
        return false;
    }
}

function gcf(a: number, b: number) {
    steps++;
    if (a == 0)
        return b;
    if (b == 0)
        return a;
    if (a == b)
        return a;
    if (a > b)
        return gcf(a-b, a);
    return gcf(a, b-a);
}

export { isPrime }