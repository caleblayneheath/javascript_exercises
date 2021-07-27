function triangle(width) {
  for (let index = 1; index <= width; index += 1) {
    console.log(' '.repeat(width - index) + '*'.repeat(index));
  }
}

triangle(5);
triangle(9);
