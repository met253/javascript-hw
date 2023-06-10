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


}
function showPlayList(playlist) {
   
     const trackFind = playlist.tracks[1]
     console.log(trackFind.trackName) 
     console.log(trackFind);
}
showPlayList(playlist);