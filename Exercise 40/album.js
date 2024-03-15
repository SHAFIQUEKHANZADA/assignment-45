function make_album(artist, title, track) {
    var album = { artist: artist, title: title };
    if (track) {
        album['track'] = track;
    }
    return album;
}
console.log(make_album("Atif Aslam", "Rabta"));
console.log(make_album("Arjit Singh", "O Maahi"));
console.log(make_album("NFAK", "Kamli Waly", 12));
