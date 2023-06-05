let musicPicture = document.getElementById('music-picture')
let musicDescription = document.getElementById('music-description')
let heart = document.getElementById('heart')
let audio = document.getElementById('audio')
let progress = document.getElementById('progress')
let shuffle = document.getElementById('shuffle')
let backward = document.getElementById('backward')
let play = document.getElementById('play')
let next = document.getElementById('farward')
let musicTime = document.getElementById('music-time')


let songs = ['audio1', 'audio2', 'audio3']
let song = songs[songs.length - 2]

const defaultSong = () =>{
    audio.src = `music/${song}.mp3`;
}

const playSong =()=>{
    play.style.display = 'none'
    pause.style.display = 'block'
    audio.play()
}

const pauseSong = () =>{
    play.style.display = 'block'
    pause.style.display = 'none'
    audio.pause()
}

const nextSong = () =>{
    
}

pause.addEventListener('click', pauseSong)
play.addEventListener('click', playSong)
next.addEventListener('click', nextSong)