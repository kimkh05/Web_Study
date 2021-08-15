const colorsArray = ['orange', 'yellow','greem'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colroarray[2]);

const colorsobj = {
  '0' : 'orange',
  '1' : 'yellow', 
  '2' : 'green',
};
console.log(colorsobj[0]);
console.log(colorsobj[1]);
console.log(colorsobj[2]);

console.log(typeof colorsArray);
console.log(typeof colorsobj);

console.log(colorsArray.length);
console.log(colorsobj.length);

colorsArray.push('red');
colorsobj.push('red');