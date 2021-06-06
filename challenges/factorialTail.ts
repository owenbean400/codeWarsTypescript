function zeros(base: number, num: number) {
    let c: number = 0;
    let m: number = magicNum(base)
    while(num / m > 0) {
        c += Math.floor(num / m);
        num = Math.floor(num / m);
    }
    return c;
}

export { zeros }

function magicNum(n: number) {
    let i = 2;
    while (i < n) {
        if (n % i == 0)
            return n / i;
        i++;
    }
    return n
}