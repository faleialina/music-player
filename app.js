// Описание проекта:
// Сверстать макет с использованием препроцессоров. Добавить динамику.
// Стиль программирования js: любой
// В репозиторий добавить Readme файл с описанием проекта

const leftSong = document.querySelector(`.prevBtn`);
const runSong = document.querySelector(`.playBtn`);
const rightSong = document.querySelector(`.nextBtn`);
const aud = document.querySelector(`audio`);
const treak = document.querySelector(`.treak`);
const artist = document.querySelector(`.artist`);
const img = document.querySelector(`.img-wrapper`);
const like = document.querySelector(`.img-like-white`);
const progressContainer = document.querySelector(`.progress_container`);
const progress = document.querySelector(`.progress`);
const time = document.getElementById(`time`);


let flag = false;

const playList = [
    {
        nameSong: `K Elize`,
        path: `./treck/treck1.mp3`,
        artist: `Wolfgang Amadeus Mozart`,
        imgPath: `./img/img1.jpg`,
    },

    {
        nameSong: `Лунная соната`,
        path: `./treck/treck2.mp3`,
        artist: `Wolfgang Amadeus Mozart`,
        imgPath: `./img/img2.jpg`,
    },

    {
        nameSong: `Маленькая ночная серенада`,
        path: `./treck/treck3.mp3`,
        artist: `Wolfgang Amadeus Mozart`,
        imgPath: `./img/img3.jpg`,
    },
]

let currenIndexSong = 0;

runSong.addEventListener(`click`, function () {
    aud.src = playList[currenIndexSong].path;
    treak.innerHTML = playList[currenIndexSong].nameSong;
    artist.innerHTML = playList[currenIndexSong].artist;
    img.style = `background-image: url(${playList[currenIndexSong].imgPath});`

    if (flag == false) {
        aud.play();
        flag = true;
        runSong.style = `background-image: url(./assets/pauseBtn.svg);`
    } else {
        aud.pause();
        flag = false;
        runSong.style = `background-image: url(./assets/playBtn.svg);`
    }
});

leftSong.addEventListener(`click`, function () {
    if (currenIndexSong == 0) return;
    currenIndexSong--
    aud.src = playList[currenIndexSong].path;
    treak.innerHTML = playList[currenIndexSong].nameSong;
    artist.innerHTML = playList[currenIndexSong].artist;
    img.style = `background-image: url(${playList[currenIndexSong].imgPath});`
    aud.play();
    flag = true;
    runSong.style = `background-image: url(./assets/pauseBtn.svg);`
});

rightSong.addEventListener(`click`, function () {
    if (currenIndexSong >= playList.length - 1) return;
    currenIndexSong++
    aud.src = playList[currenIndexSong].path;
    treak.innerHTML = playList[currenIndexSong].nameSong;
    artist.innerHTML = playList[currenIndexSong].artist;
    img.style = `background-image: url(${playList[currenIndexSong].imgPath});`
    aud.play();
    flag = true;
    runSong.style = `background-image: url(./assets/pauseBtn.svg);`
});

let heard = false;
like.addEventListener(`click`, function () {
    if (heard == false) {
        like.style = `background-image: url(./assets/IconBlack.svg);`
        heard = true;
    } else {
        like.style = `background-image: url(./assets/IconWhite.svg);`
        heard = false;
    }

});

function updateProgress(event) {
    const { duration, currentTime } = event.srcElement;
}
aud.addEventListener('timeupdate', updateProgress)

function updateProgress(event) {
    const { duration, currentTime } = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = aud.duration;
    aud.currentTime = (clickX / width) * duration;
}
progressContainer.addEventListener(`click`, setProgress);

aud.addEventListener(`timeupdate`, (event) => {
    const durationTime = event.target.duration;
    const currentTime = event.target.currentTime;
    const progressPercent = (currentTime / durationTime) * 100;
    progress.style.width = `${progressPercent}%`;

    const begin = aud.currentTime;

    const timeMin = Math.floor(begin / 60);
    const timeSec = Math.floor(begin % 60);

    const min = timeMin < 10 ? `0${timeMin}` : `${timeMin}`;
    const sec = timeSec < 10 ? `0${timeSec}` : `${timeSec}`;

    time.innerHTML = `${min}:${sec}`;
});
