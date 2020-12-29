// HOMEWORK 1
// use for loop to log
// hello
// hellohello
// hellohellohello
// hellohellohellohello
// hellohellohellohellohello
// to the console

const repeat = 10;

for (let j = 0; j < repeat; j++) {
  let hello = '';
  for (let i = 0; i < j; i++) {
    hello = hello + 'hello';
  }
  console.log(hello);
}
