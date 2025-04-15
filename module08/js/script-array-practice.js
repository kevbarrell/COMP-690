//STEP 1
const favoriteMovies = ["The Prestige", "Watchmen", "The Truman Show", "Nacho Libre", "Hot Rod"];
console.log(favoriteMovies[1]);

//STEP 2
const movies = new Array(5);

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "The Truman Show";
movies[3] = "Nacho Libre";
movies[4] = "Hot Rod";

console.log(movies[0]);

//STEP 3
const movies = new Array(5);

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "Spiderman: Homecoming";
movies[3] = "The Truman Show";
movies[4] = "Nacho Libre";
movies[5] = "Hot Rod";

console.log(movies.length);

//STEP 4
const movies = [];

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "The Truman Show";
movies[3] = "Nacho Libre";
movies[4] = "Hot Rod";

delete movies[0];

console.log(movies);

//STEP 5
const movies = [];

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "The Truman Show";
movies[3] = "Nacho Libre";
movies[4] = "Hot Rod";
movies[5] = "Spiderman: Homecoming";
movies[6] = "The Matrix";

for (let index in movies) {
  console.log(movies[index]);
}

//STEP 6
const movies = [];

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "The Truman Show";
movies[3] = "Nacho Libre";
movies[4] = "Hot Rod";
movies[5] = "Spiderman: Homecoming";
movies[6] = "The Matrix";

for (let movie of movies) {
  console.log(movie);
}

//STEP 7
const movies = [];

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "The Truman Show";
movies[3] = "Nacho Libre";
movies[4] = "Hot Rod";
movies[5] = "Spiderman: Homecoming";
movies[6] = "The Matrix";

const sortedMovies = movies.sort();

for (let movie of sortedMovies) {
  console.log(movie);
}

//STEP 8
const movies = [];

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "The Truman Show";
movies[3] = "Nacho Libre";
movies[4] = "Hot Rod";
movies[5] = "Spiderman: Homecoming";
movies[6] = "The Matrix";

const leastFavMovies = ["The Bikeriders", "The Last Airbender", "Dragonball Evolution"];

console.log("Movies I like:\n\n");

for (let movie of movies) {
  console.log(movie);
}

console.log("\nMovies I regret watching:\n\n");

for (let movie of leastFavMovies) {
  console.log(movie);
}

//STEP 9
const movies = [];

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "The Truman Show";
movies[3] = "Nacho Libre";
movies[4] = "Hot Rod";
movies[5] = "Spiderman: Homecoming";
movies[6] = "The Matrix";

const leastFavMovies = ["The Bikeriders", "The Last Airbender", "Dragonball Evolution"];

const allMovies = movies.concat(leastFavMovies);

const sortedMovies = allMovies.sort().reverse();

console.log("All Movies (Reverse Sorted):\n\n");

for (let movie of sortedMovies) {
  console.log(movie);
}

//STEP 10
const movies = [];

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "The Truman Show";
movies[3] = "Nacho Libre";
movies[4] = "Hot Rod";
movies[5] = "Spiderman: Homecoming";
movies[6] = "The Matrix";

const leastFavMovies = ["The Bikeriders", "The Last Airbender", "Dragonball Evolution"];

const allMovies = movies.concat(leastFavMovies);

const sortedMovies = allMovies.sort().reverse();

const lastMovie = sortedMovies[sortedMovies.length - 1];

console.log(lastMovie);

//STEP 11
const movies = [];

movies[0] = "The Prestige";
movies[1] = "Watchmen";
movies[2] = "The Truman Show";
movies[3] = "Nacho Libre";
movies[4] = "Hot Rod";
movies[5] = "Spiderman: Homecoming";
movies[6] = "The Matrix";

const leastFavMovies = ["The Bikeriders", "The Last Airbender", "Dragonball Evolution"];

const allMovies = movies.concat(leastFavMovies);

const sortedMovies = allMovies.sort().reverse();

console.log(sortedMovies[0]);

//STEP 12
const likedMovies = [
    "The Prestige",
    "Watchmen",
    "The Truman Show",
    "Nacho Libre",
    "Hot Rod",
    "Spiderman: Homecoming",
    "The Matrix"
  ];
  
  const leastFavMovies = ["The Bikeriders", "The Last Airbender", "Dragonball Evolution"];
  
  let allMovies = likedMovies.concat(leastFavMovies);
  
  let indicesToReplace = [];
  
  for (let i = 0; i < allMovies.length; i++) {
    if (leastFavMovies.includes(allMovies[i])) {
      indicesToReplace.push(i);
    }
  }
  
  const replacementMovies = ["Inception", "Office Space", "Ferris Bueller's Day Off"];
  
  for (let i = 0; i < indicesToReplace.length; i++) {
    allMovies[indicesToReplace[i]] = replacementMovies[i];
  }
  
  console.log("Updated movie list:");
  for (let movie of allMovies) {
    console.log(movie);
  }
  
//STEP 13
const movies = [
    ["The Prestige", 1],
    ["Watchmen", 2],
    ["The Truman Show", 3],
    ["Nacho Libre", 4],
    ["Hot Rod", 5]
  ];
  
  for (let pair of movies) {
    let movieName = pair.filter(item => typeof item === "string");
    console.log(movieName[0]);
  }
  
//STEP 14
const employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

const showEmployee = function(list) {
  console.log("Employees:\n\n");
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].toUpperCase());
  }
};

showEmployee(employees);

//STEP 15
function filterValues(arr) {
    return arr.filter(function(item) {
      return item !== false && item !== null && item !== 0 && item !== "";
    });
  }
  
  console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
  
//STEP 16
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(getRandomItem(numbers));
  
//STEP 17
function getLargestNumber(arr) {
    return Math.max(...arr);
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(getLargestNumber(numbers));
  