// const userInfo = {
//   firstName: "Avi",
//   lastName: "Flombaum",
//   company: {
//     name: "Flatbook Labs",
//     jobTitle: "Developer Apprentice",
//   },
//   friends: [
//     {
//       firstName: "Nancy",
//       lastName: "Burgess",
//       company: {
//         name: "Flatbook Labs",
//         jobTitle: "Developer Apprentice",
//       },
//     },
//     {
//       firstName: "Corinna",
//       lastName: "Jackson",
//       company: {
//         name: "Flatbook Labs",
//         jobTitle: "Lead Developer",
//       },
//     },
//   ],
//   projects: [
//     {
//       title: "Flatbook",
//       description:
//         "The premier Flatiron School-based social network in the world.",
//     },
//     {
//       title: "Scuber",
//       description:
//         "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
//     },
//   ],
// };
// console.log(userInfo.lastName);


//Shallow object iteration demonstration
const userInfo = {
  firstName: "Avi",
  lastName: "Flombaum",
  companyName: "Flatbook Labs",
  jobTitle: "Developer Apprentice",
  friend1firstName: "Nancy",
  friend1lastName: "Burgess",
  friend1companyName: "Flatbook Labs",
  friend1jobTitle: "Developer Apprentice",
  friend2firstName: "Corinna",
  friend2lastName: "Jackson",
  friend2companyName: "Flatbook Labs",
  friend2jobTitle: "Senior Developer",
  project1title: "Flatbook",
  project1description:
    "The premier Flatiron School-based social network in the world.",
  project2title: "Scuber",
  project2description:
    "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
};

function shallowIteration(target) {
    for (const key in target) {
        console.log(target[key]);
    }

}
shallowIteration(userInfo);