/**
 * @description 
 * Extend the String object (JS) or create a function (Python, C#) 
 * that converts the value of the String to and from Base64 using 
 * the ASCII (UTF-8 for C#) character set. Do not use built in functions.
 * @link https://www.codewars.com/kata/5270f22f862516c686000161
 */
function toBase642(str: string): string {
    let s: string = str.split('').map((char) => {
        let n = char.charCodeAt(0).toString(2);
        while (n.length < 8) {
            n = "0" + n;
        }
        return n;
    }).join('');
    str = "";
    for (let i = 0; i <= s.length - 1; i += 6) {
        let sixBitStr: string = s.substring(i, i + 6);
        let count: number = 0;
        while (sixBitStr.length < 6) {
            sixBitStr += "0";
            count++;
        }
        let n = parseInt(sixBitStr , 2);
        if (n >= 0 && n <= 25) {
            str += String.fromCharCode(n + 65);
        } else if (n >= 26 && n <= 51) {
            str += String.fromCharCode(n + 71);
        } else if (n >= 52 && n <= 61) {
            str += String.fromCharCode(n - 4);
        } else if ( n == 62) {
            str += "+";
        } else if (n == 63) {
            str += "/";
        }
        while (count > 0) {
            str += "="
            count -= 2;
        }
    }
    //48 - 57 == 0 - 9
    //65 - 90 == A - Z
    //97 - 122 == a - z
    //43 == +
    //47 == /
    return str;
}

function toBase64(str: string): string {
    return Buffer.from(str, "utf8").toString("base64");
}

function fromBase64(str: string): string {
    return Buffer.from(str, "base64").toString("utf8");
}

function fromBase642(str: string): string {
    let s: string = str.split('').map((char) => {
        let n: number = char.charCodeAt(0); //number string;
        if (n >= 65 && n <= 90) {
            char = (n - 65).toString(2);
        } else if (n >= 97 && n <= 122) {
            char = (n - 71).toString(2);
        } else if (n >= 48 && n <= 57) {
            char = (n + 4).toString(2);
        } else if (n == 43) {
            char = (62).toString(2);
        } else if (n == 47) {
            char = (63).toString(2);
        } else if (n == 61) {
            return ""
        }
        while (char.length < 6) {
            char = "0" + char;
        }
        return char;
    }).join('');
    let word: string = "";
    for (let i = 0; i < s.length - 1; i+=8) {
        let eightBitStr: string = s.substring(i, i + 8);
        if(eightBitStr.length == 8) {
            let n: number = parseInt(eightBitStr, 2);
            word += String.fromCharCode(n);
        }
    }
    return word;
}

function testShift(a: number, b: number) {
    console.log(a.toString(2));
    console.log(b.toString(2));
    console.log((a >> b).toString(2));
    console.log(a >> b);
}

export {toBase64, fromBase64, testShift}
