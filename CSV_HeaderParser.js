/*Given the first line of a comma-separated values (CSV) file, return an array containing the headings.

The first line of a CSV file contains headings separated by commas.
Remove any leading or trailing whitespace from each heading.*/

function getHeadings(csv) {
  let firstLine = csv.match(/[^,]+/g) ?? []; 
  return firstLine.map(s => s.trim());
}
