function assignLetterGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;

  return assignLetterGrade(average);
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
