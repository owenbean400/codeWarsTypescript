function convertFrac (lst) {
    let dMax = 0
    let dMin = lst[0][1];
    for (let i = 0; i < lst.length; i++) {
        if (lst[i][1] > dMax) {
            dMax = lst[i][1];
        }
        if (lst[i][1] < dMin) {
            dMin = lst[i][1];
        }
    }
    let count: number = dMax;
    let found: boolean = false;
    console.log(dMin);
    while(!found) {
        found = true
        for (let i = 0; i < lst.length; i++) {
            if (count % lst[i][1] != 0) {
                found = false;
            }
        }
        count += dMin;
        console.log(count);
    }
    console.log(count);
    for (let i = 0; i < lst.length; i++) {
        lst[i][0] *= count / lst[i][1];
        lst[i][1] = count;
    }
    let str = ""
    for (let i = 0; i < lst.length; i++) {
        str += "(" + lst[i][0] + "," + lst[i][1] + ")"
    }
    return str;
}

export { convertFrac }

// 1/2 1/3 1/4 1/6 to 6/12 4/12 3/12 2/12