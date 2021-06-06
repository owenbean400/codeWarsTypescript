function listSquared(m, n) {
    let ruleFit: number[][] = [];
    for (let i = m; i <= n; i++) {
        let factors: number[] = [];
        for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
            if (n % i == 0) {
                factors.push(i);
                if( n / i !== i) 
                    factors.push(n / i);
            }
        }
        let sum: number = 0;
        for (let num of factors) {
            sum += Math.pow(num, 2); 
        }
        if (Math.floor(Math.sqrt(sum)) === Math.sqrt(sum)) {
            ruleFit.push([i, sum]);
        }
    }
    return ruleFit;
}

export { listSquared }