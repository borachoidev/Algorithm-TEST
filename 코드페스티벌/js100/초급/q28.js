//2-gram

const twoGram = strings => {
  for (let i = 0; i < strings.length - 1; i++) {
    console.log(strings[i], strings[i + 1]);
  }
};
