/**
 * @description Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, 
 * and returns the sum of all the interval lengths. 
 * Overlapping intervals should only be counted once.
 * @link https://www.codewars.com/kata/52b7ed099cdc285c300001cd
 */


function sumOfInterval(intervals: [number, number][]): number {
    const intervalSet = new Set<number>()
    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0] + 1; j <= intervals[i][1]; j++) {
            intervalSet.add(j);
        }
    }
    return intervalSet.size
}

export { sumOfInterval }