class Jukebox {
    constructor() {
        this.albums = [];
    }

    addAlbum(album) {
        this.albums.push(album);
    }

    favoriteAlbum() {
        let max = -1;
        let fav = null;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav ? fav.display() : 'No albums have been played yet.';
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }

    play() {
        this.played += 1;
    }

    display() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

// Store artists/albums in an array
const albumData = [
    { artist: 'Operation Ivy', title: 'Energy' },
    { artist: 'Blink 182', title: 'Dude Ranch' },
    { artist: 'New Found Glory', title: 'Sticks and Stones' }
];

// Create jukebox and add albums
const jbox = new Jukebox();
const albumMap = {};

// Add UI after DOM loads
window.onload = function () {
    // Create drop-down menu
    const select = document.createElement("select");
    select.id = "album-select";
    document.body.insertBefore(select, document.getElementById("favoriteAlbum"));

    albumData.forEach(data => {
        const album = new Album(data.artist, data.title);
        jbox.addAlbum(album);
        const key = `${data.artist} - ${data.title}`;
        albumMap[key] = album;

        const option = document.createElement("option");
        option.value = key;
        option.textContent = key;
        select.appendChild(option);
    });

    // Create Play Button
    const playButton = document.createElement("button");
    playButton.textContent = "Play Album";
    playButton.onclick = () => {
        const selected = select.value;
        const album = albumMap[selected];
        if (album) {
            album.play();
        }
    };
    document.body.insertBefore(playButton, document.getElementById("favoriteAlbum"));

    // Create Show Favorite Album Button
    const favButton = document.createElement("button");
    favButton.textContent = "Show My Favorite Album";
    favButton.onclick = () => {
        const fav = jbox.favoriteAlbum();
        document.getElementById("favoriteAlbum").textContent = fav;
    };
    document.body.insertBefore(favButton, document.getElementById("favoriteAlbum"));
};
