// Question no 40   Album
// Record<string, unknown>// this will return string and unknown values
function createAlbum(artist: string, albumTitle:string, numTracks?: number): Record<string, unknown>{
    const album:Record<string, unknown> = { 
        artist,
        albumTitle,
    };
    if(numTracks !== undefined){
        album.numTracks = numTracks;
    }
    return album
}

const album1 = createAlbum("Taylor Swift", "Fearless");
const album2 = createAlbum("Adele", "21", 12);
const album3 = createAlbum("Ed Sheeran", "÷ (Divide)", 16);

// Print the album information
console.log(album1);
console.log(album2);
console.log(album3);

