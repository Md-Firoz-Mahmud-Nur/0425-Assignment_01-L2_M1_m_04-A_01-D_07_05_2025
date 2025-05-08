// P1

function formatString(input: string, toUpper?: boolean): string {
  console.log("toUpper--", toUpper);
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

console.log(formatString("Hello")); // Output: "HELLO"
console.log(formatString("Hello", true)); // Output: "HELLO"
console.log(formatString("Hello", false)); // Output: "hello"
