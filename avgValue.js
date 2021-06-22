function avgVal(arr) {
 total = 0
 for (let num of arr) {
  total += num
 }
 avg = total / arr.length
 console.log(avg)
}

avgVal([0, 50])
avgVal([75, 76, 80, 95, 100])