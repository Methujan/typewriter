const typewriter = (str) =>{
  let seconds = 0;
  for (const char of str) {
  
    setTimeout(() => {
    process.stdout.write(char);

    }, seconds);
    seconds += 50;

  }
  setTimeout(() => process.stdout.write('\n'), seconds);
}

const sentence = "hello there";
typewriter(sentence);
