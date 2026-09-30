/*Given a string, determine if it is a valid IPv4 Address. 
A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:
It is between 0 and 255 inclusive.
It does not have leading zeros (e.g. 0 is allowed, 01 is not).
Only numeric characters are allowed.*/

function isValidIPv4(ipv4) {
  let numberSections = ipv4.split(".");
  let length = numberSections.length === 4;
  let isNumeric = numberSections.every(x => /^\d+$/.test(x)); 
  let isInRange = numberSections.every(x => (Number(x)>=0)&&(Number(x)<=255));   
  let isWellFormed = numberSections.every(x => String(Number(x)) === x);   
  return length && isNumeric && isInRange && isWellFormed;
}
