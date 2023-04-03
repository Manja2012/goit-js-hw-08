import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LS_TIME_KEY = "videoplayer-current-time"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveTimeElapsedInLocalStorage (data) {
    localStorage.setItem(LS_TIME_KEY, JSON.stringify(data.seconds))
}

player.on('timeupdate', throttle(saveTimeElapsedInLocalStorage, 1000))

const timeElapsed = JSON.parse( localStorage.getItem(LS_TIME_KEY)) || 0

player.setCurrentTime(timeElapsed)
    .then(function(seconds) {

    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });