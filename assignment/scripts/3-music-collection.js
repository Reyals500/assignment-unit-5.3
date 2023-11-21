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
