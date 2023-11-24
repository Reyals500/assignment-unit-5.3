console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
    let musica = {
    title,
    artist,
    yearPublished,
  }//end of object
  collection.push(musica)
  return musica;
}

addToCollection(myCollection, 'Take me back to eden', 'Sleep Token', '2023');
addToCollection(myCollection, 'Nightmare', 'Avenged Sevenfold', '2010');
addToCollection(myCollection, 'Emblas Saga', 'Brothers of Metal', '2020');
addToCollection(myCollection, 'Midnight', 'Set It Off', '2019');
addToCollection(myCollection, 'The Nexus', 'Amaranthe', '2013');
addToCollection(myCollection, 'Utas Songs on film One Piece Red', 'Ado', '2022');
console.log(myCollection);//logging to make sure it works

// function showCollection(collection) {
//   for (value of myCollection) {
//     console.log(title, 'by', artist, 'published in', yearPublished);
//     return value;
//   }//First try witht this function
//   // console.log(myCollection.title, 'by', myCollection.artist, 'published in', myCollection.yearPublished);
// };
// let i = 0;//this was a second try on the function
// function showCollection(collection) {
//   for (i = 0; i < myCollection.length; i++) {
//     let logs = myCollection[i];
//     return logs;
//   }
// };
// console.log(showCollection('${title} by ${artist} published in ${yearPublished}'));

console.log('==This is showing the showColletion function==');
function showCollection(collection) {
  for (let object of collection) {
    console.log(object.title + ' by ' + object.artist + ' published in ' + object.yearPublished);
  }
}
showCollection(myCollection);


// function findByArtist(collection, artist) {//second try at the findByArtist function
//   let matchingArtist = [];
//   for (let object of collection){;
//   let artistFound = object.groupby(artist);
//   matchingArtist.push(artistFound);
//   return matchingArtist;
//   }
// }

// function findByArtist(collection, artist) {//this was a function i used with ai and then used it to help me adjust previous function
//   let artistArray = [];
//   collection.forEach(item => {
//       if (item.artist === artist) {
//           artistArray.push(item);
//           console.log(artistArray);
//       }
//   });
//   return artistArray;
// }

console.log('/This is findByArtist start/');
function findByArtist(collection, artist) {
  let matchingArtist = [];
  for (let object of collection) {//setting this up with the intention of going through collection like showCollection
    if (object.artist === artist) {
      matchingArtist.push(object);
    }//with this in mind it should show the artist in said matchingArtist
  }
    return matchingArtist;//hoping this will return an empty array
}

console.log(findByArtist(myCollection, 'Avenged Sevenfold'));
console.log(findByArtist(myCollection, 'Brothers of Metal'));
console.log(findByArtist(myCollection, 'Taylor Swift'));
console.log(findByArtist(myCollection, 'Black Sabbath'));





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
