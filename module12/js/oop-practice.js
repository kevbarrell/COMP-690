// // Step 1: Create two classes, Cat (named) and Dog (anonymous)
// class Cat {
//     constructor(name) {
//         this.name = name;
//     }
// }
// const Dog = class {
//     constructor(name) {
//         this.name = name;
//     }
// };

// // Step 2: Create new instances of Cat and Dog
// const myCat = new Cat("Whiskers");
// const myDog = new Dog("Rover");

// // Step 3: Create Animal class with a method that logs a message
// class Animal1 {
//     constructor() {
//         console.log("The Animal has been created");
//     }
// }
// const animal1 = new Animal1();

// // Step 4: Replicate Animal class to accept argument and display it
// class Animal2 {
//     constructor(message) {
//         console.log(message);
//     }
// }
// const animal2 = new Animal2("This animal says hello!");

// // Step 5: Create Animal class with five properties
// class Animal3 {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const animal3 = new Animal3("dog", "bulldog", "brown", "2ft", "3ft");

// // Step 6: Loop through and display all properties using for-in loop
// for (let prop in animal3) {
//     console.log(`${prop}: ${animal3[prop]}`);
// }

// // Step 7: Create public method speak with condition based on type
// class Animal4 {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }

//     speak() {
//         if (this.type === "dog") {
//             console.log(`The ${this.color} dog is barking!`);
//         } else if (this.type === "cat") {
//             console.log(`The ${this.color} cat is meowing!`);
//         }
//     }
// }
// const animal4 = new Animal4("dog", "lab", "black", "2ft", "3ft");
// animal4.speak();

// // Step 8: Convert properties to private, use private checkType(), and privileged speak()
// class Animal5 {
//     #type;
//     #breed;
//     #color;
//     #height;
//     #length;

//     constructor(type, breed, color, height, length) {
//         this.#type = type;
//         this.#breed = breed;
//         this.#color = color;
//         this.#height = height;
//         this.#length = length;
//     }

//     #checkType() {
//         return this.#type === "dog" ? "dog" : "cat";
//     }

//     speak() {
//         console.log(`The ${this.#checkType()} has made a noise!`);
//     }
// }
// const animal5 = new Animal5("cat", "tabby", "white", "1ft", "2ft");
// animal5.speak();

// Step 9: Create String method called findWords that counts specific word
String.prototype.findWords = function (word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = this.match(regex);
    alert(`The word "${word}" was found ${matches ? matches.length : 0} times.`);
};
const paragraph = "The cat sat on the mat. The cat is fat. The cat likes that.";
paragraph.findWords("cat");