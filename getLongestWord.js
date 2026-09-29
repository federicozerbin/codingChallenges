function getLongestWord(sentence) {
  sentence = sentence.replace(/\./g, ""); //takes away all periods points
  let wordsList = sentence.match(/\S+/g) ?? []; // matches all chars that are not space, tab or newline escapes, and repeats it for all occurences. ?? [] exclude nulls
  return wordsList.reduce((longestFound, current) => (current.length > longestFound.length ? current : longestFound), ""); /* short way to write a plain loop:
  let longestFound = "";
  for (const current of wordsList) {
    if (current.length > longestFound.length) {
      longestFound = current;
    }
  }*/
}
