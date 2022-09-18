console.log("loop challange num1")
//odd values from 1 up to 20.
for (i = 0; i < 21; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }

}
console.log("loop challange num2")
// values that are evenly divisible by 3 from 100 down to 0.
for (x = 100; x > 0; x--) {

    if (x % 3 == 0) {

        console.log(x)
    }
}
console.log("loop challange num3")
// print  the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
let arr = [4, 2.5, 1, -0.5, -2, -3.5];
for (let y = 0; y < arr.length; y++) {
    console.log(arr[y]);
}
console.log("loop challange num4")
//the result 1 + 2 + 3 + ... + 98 + 99 + 100. get back 5050 at the end. at (n=100)

function sumTo(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
let n = 5;
if (sumTo(n) >= 5051) {
    console.log("alert:5050 top value")
}
else { console.log(sumTo(n)); }


console.log("loop challange num5")
// the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

function productTo(u) {
    let product = 1;

    for (let i = 1; i <= u; i++) {
        product = product * i;
    }
    return product;
}
let u = 4;
if (productTo(u) >= 479001600) {
    console.log("alert:479001600 top value")
}
else { console.log(productTo(u)); }



