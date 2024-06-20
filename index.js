function SumArray(params) {
    let sum = 0;
    for (i=0; i<params.length; i++) {
        sum = sum + params[i];
      }
      return sum;
    }

let s = SumArray([10,20,30,40,50]);
console.log('Sum = ' + s);
console.log('DevOps part B9.5.1 (Node.js, nmp, jquery)');