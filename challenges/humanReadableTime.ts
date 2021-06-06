/**
 * @description 
 * Write a function, which takes a non-negative integer (seconds)
 * as input and returns the time in a human-readable format (HH:MM:SS)
 * @link https://www.codewars.com/kata/52685f7382004e774f0001f7
 */

function humanReadable(seconds: number): string {
    let time: String[] = [];
    for(let i = 0; i <= 2; i++){
        time[i] = Math.floor(seconds / Math.pow(60, 2 - i)).toString();
        if(time[i].length < 2)
            time[i] = "0" + time[i];
        seconds = seconds % Math.pow(60, 2 - i);
    }
    return time.join(":");
}

export { humanReadable }