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
    randomNumber = Math.floor(Math.random() * songs.length);
    song = songs[randomNumber]
    defaultSong()
    playSong();
};

let getDuration = (e) =>{
        const {duration,currentTime} = e.srcElement;
        var sec;
        var sec_d;
    
        // define minutes currentTime
        let min = (currentTime==null)? 0:
         Math.floor(currentTime/60);
         min = min <10 ? '0'+min:min;
    
        // define seconds currentTime
        function get_sec (x) {
            if(Math.floor(x) >= 60){
                
                for (var i = 1; i<=60; i++){
                    if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
                        sec = Math.floor(x) - (60*i);
                        sec = sec <10 ? '0'+sec:sec;
                    }
                }
            }else{
                 sec = Math.floor(x);
                 sec = sec <10 ? '0'+sec:sec;
             }
        } 
    
        get_sec (currentTime,sec);
    
        // change currentTime DOM
        musicTime.innerHTML = min +':'+ sec;
    
        // define minutes duration
        let min_d = (isNaN(duration) === true)? '0':
            Math.floor(duration/60);
         min_d = min_d <10 ? '0'+min_d:min_d;
    
    
         function get_sec_d (x) {
            if(Math.floor(x) >= 60){
                
                for (var i = 1; i<=60; i++){
                    if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
                        sec_d = Math.floor(x) - (60*i);
                        sec_d = sec_d <10 ? '0'+sec_d:sec_d;
                    }
                }
            }else{
                 sec_d = (isNaN(duration) === true)? '0':
                 Math.floor(x);
                 sec_d = sec_d <10 ? '0'+sec_d:sec_d;
             }
        } 
    
        // define seconds duration
        
        get_sec_d (duration);
    
        // change duration DOM
        console.log(min_d +':'+ sec_d)
    
};

randomBtn.addEventListener("click", randomFunc);
audio.addEventListener("ended", nextSong);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("timeupdate", updateProgress);
pause.addEventListener('click', pauseSong)
play.addEventListener('click', playSong)
next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)
audio.addEventListener('timeupdate',getDuration); 
