// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

let names = ["Guadalupe", "Ollie", "Aki"]
let note = ["for the wonderful surprise gift!"]

function writeCards(names) { //don't forget you need the parameters/argument so it knows to take from the lets above
    const messages = [] //this is how you create a new array
    for (let i = 0; i < names.length; i ++) {
        const message = `Thank you, ${names[i]}, ${note}`; 
        messages.push(message); // push() method adds new items to the end of an array, changes the length of the array and returns a new length. 
    };
   
    return messages; //here you are returning the new array
}

writeCards(names)

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number --
    };
    return number;
}
countDown(number);