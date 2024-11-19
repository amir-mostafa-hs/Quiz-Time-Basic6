// 1.Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(array) {
  array.forEach((item) => {
    const data = array.filter((number) => {
      if (item == number) {
        return item;
      }
    });
    console.log(data.length);
  });
}

findOdd([0, 1, 0, 1, 0]);

//2.String repeat
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr(n, s) {
  return s.repeat(n);
}

//3.Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(arr[i], i + 1)) {
      if (arr.indexOf(arr[i]) == i) {
        return arr[i];
      }
    }
  }
}

//4.Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

//5.Sum of a sequence
// https://www.codewars.com/kata/586f6741c66d18c22800010a

//6.Arithmetic sequence - sum of n elements
// https://www.codewars.com/kata/55cb0597e12e896ab6000099

//7.Find the stray number
// https://www.codewars.com/kata/57f609022f4d534f05000024

//8.Array power
// https://www.codewars.com/kata/596e5b0fdba3fa5fa7000026

//9.Sum Strings as Numbers
// https://www.codewars.com/kata/5324945e2ece5e1f32000370

//10.Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

//11.Plus - minus - plus - plus - ... - Count
// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

//12.IndexOf Array in Array
// https://www.codewars.com/kata/5783ef69202c0ee4cb000265

//13.Number of People in the Bus
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099
