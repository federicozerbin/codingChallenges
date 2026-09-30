/*Phone Number Formatter
Given a string of eleven digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".*/

function formatNumber(number) {
  let prefix = number.at(0);
  let triplet1 = number.slice(1, 4);
  let triplet2 = number.slice(4, 7);
  let suffix = number.slice(7, 11);
  return "+".concat(prefix).concat(" (").concat(triplet1).concat(") ").concat(triplet2).concat("-").concat(suffix);
}
