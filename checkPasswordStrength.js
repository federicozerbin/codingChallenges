/*
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.
*/

function checkStrength(password) {
  let booleans = [false, false, false, false];
  booleans[0] = password.length >= 8;
  booleans[1] = /\p{Lu}/u.test(password) && /\p{Ll}/u.test(password);
  booleans[2] = /[0-9]/u.test(password);
  booleans[3] = /[!@#$%^&*]/.test(password);

  switch(booleans.filter(Boolean).length) {
  case 1:
    return "weak";
  case 2:
    return "medium";
  case 3:
    return "medium";
  case 4:
    return "strong";
  default:
    return "weak";
  }
}
