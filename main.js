let cover = document.getElementById('cover')
let musicDescription = document.getElementById('music-description')
let heart = document.getElementById('heart')
let audio = document.getElementById('audio')
let shuffle = document.getElementById('shuffle')
let prev = document.getElementById('backward')
let play = document.getElementById('play')
let next = document.getElementById('forward')
let musicTime = document.getElementById('music-time')
let playerBg = document.getElementById('player-bg')
let artiste = document.getElementById('artiste')
let title = document.getElementById('title')
let randomBtn = document.getElementById('random')
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');


let songs = ['audio1', 'audio2', 'audio3']
let songsInfo = {
    artistes : ['Joe boy_Feat Ckay', 'Joe boy_Feat Ludacris', 'Adekunle Gold'],
    titles: ['Wetin Be Love', 'Chiken Spice and Curry', 'Do you Mind']
}

let song = songs[songs.length-3]  //0
let songIndex = songs.length; //3


const defaultSong = () =>{
    audio.src = `music/${song}.mp3`;
    cover.src = `image/${song}.png`;
}

const playSong =()=>{
    play.style.display = 'none'
    pause.style.display = 'block'
    playerBg.style.display = 'flex'
    audio.play()
}

const pauseSong = () =>{
    play.style.display = 'block'
    pause.style.display = 'none'
    playerBg.style.display = 'none'
    audio.pause()
}

const nextSong = () =>{
    songIndex++;

    if (songIndex > songs.length - 1) {
      songIndex = 0; 
    } 
    song = songs[songIndex]
    defaultSong()
    playSong()
}

const prevSong = () =>{
    songIndex--;
    if (songIndex < 0) {
    songIndex = songs.length - 1;
    }
    song = songs[songIndex]
    defaultSong()
    playSong()
}

let updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
};

let setProgress = (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
};

let randomFunc = () => {
    let randomNumber = Math.floor(Math.random() * songs.length);
    song = songs[randomNumber]
    defaultSong()
    playSong();
};
randomBtn.addEventListener("click", randomFunc);

audio.addEventListener("ended", nextSong);


progressContainer.addEventListener("click", setProgress);
audio.addEventListener("timeupdate", updateProgress);

pause.addEventListener('click', pauseSong)
play.addEventListener('click', playSong)
next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)
