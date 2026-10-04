/*Digital Detox checker function
Given an array of your login logs, determines whether user has met digital detox goal. Each log is a string in the format "YYYY-MM-DD HH:mm:ss".
digital detox goal is met if both of the following statements are true:
user logged in no more than once within any four-hour period.
user logged in no more than 2 times on any single day.*/

function digitalDetox(logs) {
  let fourHoursStop = true;
  let twiceADayCap = true;

  logs.sort();

  // fourHoursStop check. needs numbers, so I use Date objects
  let dates = logs.map(x => new Date(x.replace(" ", "T"))); 
  for (let i = 1; i < dates.length; i++) {
    let hoursGap = (dates[i] - dates[i - 1]) / (1000 * 60 * 60);
    if (hoursGap < 4) fourHoursStop = false;
  }

  // twiceADayCap check, counts repetition of same day 
  let days = logs.map(x => x.split(" ")[0]);
  const countPerDay = {};
  for (const x of days) {
    countPerDay[x] = (countPerDay[x] ?? 0) + 1;
  }
  twiceADayCap = Object.values(countPerDay).every(count => count <= 2);

  return fourHoursStop && twiceADayCap;
}
