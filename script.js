function secondHighest(arr) {
    if (arr.length < 2) return -Infinity;
    
    let highest = -Infinity;
    let secondHighest = -Infinity;
    
    for (let num of arr) {
        if (num > highest) {
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num < highest) {
            secondHighest = num;
        }
    }
    
    return secondHighest === -Infinity ? -Infinity : secondHighest;
}
