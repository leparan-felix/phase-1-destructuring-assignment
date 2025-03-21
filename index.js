// Data
const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Assign variables based on animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Exclude horse, rename variables
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Exclude chicken, rename based on colors
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays

// 4. Assign variables for colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Exclude indigo, use first letters
const [r, o, y, g, b, , v] = colors;

// 6. Assign only indigo
const [, , , , , indg] = colors;

// Objects

// 7. Destructure muppet object
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure nestedMuppet for songs 2 and 4, job, and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;

// Logging results to verify correctness
console.log(moo, neigh, baa, oink, cluck); // Sounds
console.log(bessie, dolly, babe, little); // Four animals without horse
console.log(blackAndWhite, black, pink); // Three animals without chicken
console.log(red, orange, yellow, green, blue, indigo, violet); // Colors
console.log(r, o, y, g, b, v); // Colors without indigo
console.log(indg); // Only indigo
console.log(muppetName, color, song, job, partner); // Muppet details
console.log(song2, song4, nestedJob, nestedPartner); // Nested muppet details


// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner