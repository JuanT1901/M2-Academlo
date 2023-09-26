const fibonacci = limit => {
  //CODE HERE
  let arr = [0, 1]

  if(limit === 0) {
    return [0]
  }

  for (const i of arr) {
    let sum = arr[arr.length - 1] + arr[arr.length - 2];
    if(sum > limit){
      return arr;
    } else {
      arr.push(sum)
    }
  }

  return arr
}

console.log(fibonacci(55))