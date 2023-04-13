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
        runSong.style = `background-image: url(./assets/playBtn\ \(2\).svg);`
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
    runSong.style = `background-image: url(./assets/playBtn\ \(2\).svg);`
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
    runSong.style = `background-image: url(./assets/playBtn\ \(2\).svg);`
});

let heard = false;
like.addEventListener(`click`, function () {
    if (heard == false) {
        like.style = `background-image: url(./assets/favBtn.svg);`
        heard = true;
    } else {
        like.style = `background-image: url(./assets/Icon\ \(1\).svg);`
        heard = false;
    }

});
