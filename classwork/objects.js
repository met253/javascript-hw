const playlist = {
    name: "Top 2023",
    rating: 10,

    tracks: [
        {
            trackName: "Stefania",
            duration: 4,
            language: "Ukranian",
            popular: true
        },
        {
            trackName: "Wild dances",
            duration: 3,
            language: "Ukranian",
            popular: true
        },
        {
            trackName: "asdfa",
            duration: 500,
            language: "Urdu",
            popular: false
        }

    ],
    showTrack() {

        const trackFind = this.tracks[1]
        console.log(trackFind.trackName)
        console.log(trackFind);
    },
    changeName(newName) {
        this.tracks[2].trackName = newName;


    },
    countTracks() {
        return this.tracks.length;
     
    }
}
for (const key in playlist) {
    console.log(playlist[key]);
}
playlist.showTrack();
playlist.changeName("STARS");
const countNum = playlist.countTracks()
console.log(countNum);


//






