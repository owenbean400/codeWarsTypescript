const egg = /\{([^}]+)\}|\[([^}]+)\] /g;
const BEG_BRACKETS = ["{", "(", "["];
const END_BRACKETS = ["}", ")", "]"];

function parseMolecule(formula: string) {
    let chem = [];
    console.log(formula)
    breakWord(formula, chem, 1);
    arrToObj(chem);
    return arrToObj(chem);
}

function arrToObj(arr) {
    let obj = {}
    for(let str of arr) {
        let strNum = str.search(/\d+/g) !== -1 ? parseInt(str.split('').reverse().join('').substring(0, str.split('').reverse().join('').search(/\D/g)).split('').reverse().join('')) : 1;
        str = str.search(/\d+/g) !== -1 ? str.substring(0, str.length - str.split('').reverse().join('').search(/\d+/g) - strNum.toString().length) : str;
        if (obj[str] === undefined) {
            obj[str] = strNum;
        } else {
            obj[str] += strNum;
        }
    }
    return obj
}

function breakWord(formula: string, chem: string[], num: number) {
    let t: number = 0;
    let bracketCount: number = 0;
    let nowBracketCount: number = 0;
    for (let i = 1; i < formula.length; i++) {
        if (BEG_BRACKETS.includes(formula.charAt(i))) {
            if (bracketCount === 0) {
                calcChem(t, i, formula, chem, num, nowBracketCount);
                t = i;
            }
            bracketCount++;
            nowBracketCount = bracketCount;
        }
        if (END_BRACKETS.includes(formula.charAt(i))) {
            bracketCount--;
        }
        if (formula.charAt(i).toLowerCase() != formula.charAt(i) && bracketCount === 0) {
            calcChem(t, i, formula, chem, num, nowBracketCount);
            t = i;
            nowBracketCount = 0;
        }
    }
    calcChem(t, formula.length, formula, chem, num, nowBracketCount);
}

function calcChem(t, i, formula, chem, num, bracketCount) {
    let strNum: number = 0;
    let str: string = ""
    str = formula.substring(t, i);
    strNum = str.search(/\d+/g) !== -1 ? parseInt(str.split('').reverse().join('').substring(0, str.split('').reverse().join('').search(/\D/g)).split('').reverse().join('')) : 1;
    str = str.search(/\d+/g) !== -1 ? str.substring(0, str.length - str.split('').reverse().join('').search(/\d+/g) - strNum.toString().length) : str;
    if (bracketCount > 0) {
        str = str.substring(1, str.length - 1);
        breakWord(str, chem, strNum * num);
    }
    else
        chem.push(str + (strNum * num));
}

export {parseMolecule}