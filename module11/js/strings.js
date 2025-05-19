//STEP 1 - Propmt for name and display the number of characters
let name = prompt("What is your name?");
alert("Your name has " + name.length + " characters.");

//STEP 2 - Prompt for name, then a number, and display the letter at that position
let personName = prompt("Enter your name:");
let number = prompt("Enter a number to find the letter at that position:");
alert("The letter at position " + number + " is: " + personName.charAt(number));

//STEP 3 - Prompt for first and last name, then concatenate and display
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
alert("Your name is: " + firstName + " " + lastName);

//STEP 4 - Find index of "fox"
let text1 = "The quick brown fox jumps over the lazy dog";
alert("The word 'fox' is at index: " + text1.indexOf("fox"));

//STEP 5 - Find last index of "fox"
let text2 = "The quick brown fox jumps over the lazy fox";
alert("The last occurrence of 'fox' is at index: " + text2.lastIndexOf("fox"));

//STEP 6 - Replace "the lazy dog" with user's name
let text3 = "The quick brown fox jumped over the lazy dog";
let fullName = prompt("Enter your full name:");
let newText3 = text3.replace("the lazy dog", fullName);
alert(newText3);

//STEP 7 - Prompt for a word and search for it in the string
let text4 = "The quick brown fox jumps over the lazy dog";
let searchWord = prompt("Enter a word to search for:");
alert("The word '" + searchWord + "' is at index: " + text4.indexOf(searchWord));

//STEP 8 - Extract "the lazy dog" and convert to uppercase
let old_string = "The quick brown fox jumps over the lazy dog";
let new_string = old_string.slice(31); // "the lazy dog" starts at index 31
alert(new_string.toUpperCase());

//STEP 9 - Trim and convert to lowercase
let messyText = "    THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG     ";
let cleanText = messyText.trim().toLowerCase();
alert(cleanText);

//STEP 10 - Capitalize first letter of the sentence
let sentence = "the quick brown fox jumps over the lazy dog";
let capitalized = sentence.charAt(0).toUpperCase() + sentence.slice(1);
alert(capitalized);