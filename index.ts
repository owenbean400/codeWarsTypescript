import { getCombinedModifierFlags, getConfigFileParsingDiagnostics } from "typescript";
import { countBits2 } from './challenges/countBits';
import { playingWithDigits } from './challenges/playingWithDigits';
import { order } from './challenges/yourOrderPlease';
import { decompose } from './challenges/decompose';
import { isSquare } from './challenges/isSquare'; 
import { romanSolution } from './challenges/romanNumeral';
import { zeros } from './challenges/factorialTail';
import { parseMolecule } from './challenges/parseMolecule';
import { toBase64, fromBase64, testShift } from './challenges/base64';
import { convertFrac } from './challenges/convertFrac';
import { isPrime } from './challenges/isPrime';
import { listSquared } from './challenges/listSquared'
import { findOdd } from './challenges/findOdd';
import { humanReadable } from './challenges/humanReadableTime';
import { sumOfInterval } from './challenges/sumInterval';

run();  

function run(): void {
    //console.log(countBits2(1234));
    //console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
    //console.log(humanReadable(3800));
    //console.log(listSquared(250, 500));
    //console.log(gap(2, 5, 7));
    //console.log(gap(4, 130, 200));
    //console.log(gap(6, 100, 110));
    //console.log(gap(2, 5, 5));
    //console.log(gap(11, 30000, 30011));
    //console.log(playingWithDigits(46288, 3));
    //console.log(order("is2 Thi1s djwad djwa 0dwad 29dwaj ?#%#^& T4est 3a"));
    //console.log(decompose(50));
    //console.log(decompose(5575));
    //console.log(isSquare(25));
    //console.log(isSquare(3));
    //console.log(romanSolution("IV")); //4
    //console.log(romanSolution("XXI")); //21
    //console.log(romanSolution("LXIV")); //64
    //console.log(romanSolution("XCVII")); //97
    //console.log(romanSolution("XV"));  //15
    //console.log(romanSolution("MDCLXVI"));  //1666
    //console.log(zeros(2, 6));
    //console.log(zeros(16, 16)); //3
    //console.log(zeros(40, 10)); //0
    //console.log(zeros(17, 16)); //0
    //console.log(zeros(7, 50)); //8
    //console.log(parseMolecule("H2O331"));
    //console.log(parseMolecule("H2O"))
    //console.log(parseMolecule("Mg(OH)2"));
    //console.log(parseMolecule("K4[ON(SO3)2]2"));
    //console.log(parseMolecule("ON(SO3)12H2O"));
    //console.log(convertFrac([[3, 4], [1, 3], [1, 16], [2, 32]]));
    //console.log("toBase64: " + toBase64("Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure."));
    //console.log(String.fromCharCode(75))
    //console.log("^^")
    //console.log(fromBase64("dGluA"));
    //console.log("reverting: " + fromBase64(toBase64("Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.")));
    //console.log("fromBase64: " + fromBase64("TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4="))
    //console.log(toBase64("this is a string!!"));
    console.log(sumOfInterval([[1, 4], [7, 10], [3, 5]]))
    console.log(sumOfInterval([[1, 5], [6, 10]]));
}