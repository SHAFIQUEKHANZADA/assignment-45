function make_album(artist: string, title: string, track? :  number) {
   let album = {artist, title}
   if (track) {
       album['track'] = track
   }
   return album
}
console.log(make_album("Atif Aslam", "Rabta"))
console.log(make_album("Arjit Singh", "O Maahi"))
console.log(make_album("NFAK", "Kamli Waly", 12))
