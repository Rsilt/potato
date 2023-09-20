console.log("1" == 1); // proovib convertida
console.log("1" === 1); //strict comparison

// string to number

let actuallyNumber = "1";
console.log(parseInt(actuallyNumber));
console.log(+actuallyNumber);
console.log(Number(actuallyNumber));

const asyncAwait = async () => {
  const myPromiseResponse = await myPromise();
  const myPromiseResponse2 = await myPromise2;
  return { myPromiseResponse, myPromiseResponse2 };
};

let a = 5;
let b = 99;
let temp = a;
a = b;
b = temp;

const a = 1,
  b = 2,
  c = 3,
  d = 4;
