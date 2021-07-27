function cleanUp(string) {
  const REGEX = /([^a-z]+)/gi;
  return string.replace(REGEX, ' ');
}  

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

