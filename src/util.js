const getMaxNextLine = (input, maxChars) => {
  // Split the string into an array of words.
  const allWords = input.split(" ");
  // Find the index in the words array at which we should stop or we will exceed
  // maximum characters.
  const lineIndex = allWords.reduce((prev, cur, index) => {
    if (prev?.done) return prev;
    const endLastWord = prev?.position || 0;
    const position = endLastWord + 1 + cur.length;
    return position >= maxChars ? { done: true, index } : { position, index };
  });
  const line = allWords.slice(0, lineIndex.index).join(" ");
  // And determine what's left.
  const remainingChars = allWords.slice(lineIndex.index).join(" ");
  // Return the result.
  return { line, remainingChars };
};

const maxChars = 65;

exports.formatTitle = (title) => {
  let output = [];
  if (title.length >= maxChars) {
    const firstLine = getMaxNextLine(title, maxChars);
    let remainingChars = firstLine.remainingChars;
    output = [firstLine.line];
    while (remainingChars && remainingChars.length > 0) {
      if (remainingChars.length >= maxChars) {
        const nextLine = getMaxNextLine(remainingChars, maxChars);
        output = [...output, nextLine.line];
        remainingChars = nextLine.remainingChars;
      } else {
        output = [...output, remainingChars];
        remainingChars = "";
      }
    }
  } else {
    output = [title];
  }

  return output;
};
