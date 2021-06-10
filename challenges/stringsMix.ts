/**
 * @link https://www.codewars.com/kata/5629db57620258aa9d000014
 */


const mix = (s1: string, s2: string) => {
    let stuff = objToKeySorted(combineObj(createObj(s1), createObj(s2)));
    let str: string = "";
    for (let things of stuff) {
        let chars: string = "";
        for (let i = 0; i < things[1]; i++) {
            chars += things[0];
        }
        str += things[2] + ":" + chars + "/";
    }
    str = str.substring(0, str.length - 1);
    return str;
}

/**
 * Create object of info of each letter in statement
 * 
 * @param s string of words
 * @returns object of letter information
 */
function createObj(s: string): object {
    let obj: object = {}
    for (let i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
            obj[s.charAt(i)] = {
                amount: (obj[s.charAt(i)] === undefined) ? 1 : obj[s.charAt(i)]["amount"] + 1
            }
        }
    }
    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (obj[Object.keys(obj)[i]]["amount"] <= 1) {
            delete obj[Object.keys(obj)[i]];
            i--;
        }
    }
    return obj;
}

/**
 * creates an array that can be iterated in order
 * 
 * @param obj object of letter info
 * @returns array of letter, amount of letter, and what the high for
 */
function objToKeySorted(obj: Object) {
    let arr = [];
    for (let i = 0; i < Object.keys(obj).length; i++) {
        let letter: string = Object.keys(obj)[i]
        arr.push([letter, obj[letter]["amount"], obj[letter]["high"]]);
    }
    arr.sort((arr1, arr2) => {return sort(arr1, arr2)});
    return arr;
}


/**
 * 
 * sorts array based on the size, then based on alphabetical order
 * format is [[letter, amount, high], ...]
 * 
 * @param arr1 first array
 * @param arr2 second array
 * @returns number for sorting
 */
function sort(arr1, arr2): number {
    if (arr1[1] > arr2[1]) {
        return -1;
    } else if (arr1[1] < arr2[1]) {
        return 1;
    } else {
        if (arr1[2] === arr2[2]) {
            return arr1[0].localeCompare(arr2[0]);
        } else if (arr1[2] === "1") {
            return -1;
        } else if (arr2[2] === "1") {
            return 1;
        } else if (arr1[2] === "2") {
            return -1;
        } else if (arr2[2] === "2") {
            return 1;
        }
    }
}

/**
 * combines two letter object data to one
 * 
 * @param obj1 object data 1
 * @param obj2 object data 2
 * @returns obj data of both
 */
function combineObj(obj1: object, obj2: object): object {
    let obj = { ...obj1 };
    for (let i = 0; i < Object.keys(obj).length; i++) {
        obj[Object.keys(obj)[i]]["high"] = "1";
    }
    for (let i = 0; i < Object.keys(obj2).length; i++) {
        if (obj[Object.keys(obj2)[i]] !== undefined) {
            if (obj[Object.keys(obj2)[i]]["amount"] < obj2[Object.keys(obj2)[i]]["amount"]) {
                obj[Object.keys(obj2)[i]]["amount"] = obj2[Object.keys(obj2)[i]]["amount"];
                obj[Object.keys(obj2)[i]]["high"] = "2";
            } else if (obj[Object.keys(obj2)[i]]["amount"] == obj2[Object.keys(obj2)[i]]["amount"]) {
                obj[Object.keys(obj2)[i]]["high"] = "=";
            }
        } else {
            if(obj2[Object.keys(obj2)[i]]["amount"] > 0) {
                obj[Object.keys(obj2)[i]] = {
                    amount: obj2[Object.keys(obj2)[i]]["amount"],
                    high: "2"
                }
            }
        }
    }
    return obj;
}

export { mix }