//STEP 1 - Return string with letters in alphabetical order
function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}
console.log(alphabeticalOrder("webmaster"));

//STEP 2 - Capitalize the first letter of each word
function capitalizeWords(str) {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeWords("the quick brown fox"));

//STEP 3 - Count the number of vowels in a string
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(countVowels("The quick brown fox"));

//STEP 4 - Generate a random string ID of specified length
function generateId(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
console.log(generateId(8));

//STEP 5 - Return the longest country name from a list
function longestCountryName(countries) {
  return countries.reduce((longest, country) => country.length > longest.length ? country : longest, "");
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
