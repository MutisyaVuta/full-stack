const users = [
   {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
    personalQuote: "I just got lost in thought - it was unfamiliar territory",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote: "Always remember you’re unique, just like everyone else",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
    personalQuote: "Behind every great man is a woman rolling her eyes",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
    personalQuote:
      "You don’t have to see the whole staircase, just take the first step",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
    personalQuote:
      "Failure is not the opposite of success: it’s part of success",
  },
    
]

//interacting with the collection of users
//1.Print out each user's first name using a function
// function firstNamePrinter(collection) {
//     for (const user of collection) {
//         console.log(user.firstName);
//     }
// }
// firstNamePrinter(users);

// 2.Users whose favorite color is blue
// function blueFavourite(collection) {
//     for (const user of collection) {
//         if (user.favoriteColor === "Blue") {
//             console.log(`${user.firstName} ${user.lastName} loves the color blue!`);
//         }
//     }
// }
// blueFavourite(users);

// 3.Abstract the code so that we can print users based on any favorite color
function favoriteColorPrinter(collection, color) {
    for (const user of collection) {
        if (user.favoriteColor === color) {
            console.log(`${user.firstName} ${user.lastName} loves the color ${color}!`);
        }
    }
}
favoriteColorPrinter(users, "Red");