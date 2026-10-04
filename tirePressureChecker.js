/*Given an array with four numbers representing the tire pressures in psi of the four tires in a vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, 
returns an array of four strings describing each tire's status: 
"Low" if the tire pressure is below the minimum allowed.
"Good" if it's between the minimum and maximum allowed.
"High" if it's above the maximum allowed.
(1 bar equals 14.5038 psi)
*/


function tireStatus(pressuresPSI, rangeBar) {

  const rangePSIconverted = rangeBar.map(x => x * 14.5038);
  const tireHealth = [];

  pressuresPSI.forEach(
    function (x) {
      if (x < rangePSIconverted[0]) tireHealth.push("Low");
      else if (x > rangePSIconverted[1]) tireHealth.push("High");
      else tireHealth.push("Good");
    });
  return tireHealth;
}
