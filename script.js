// Get the video container element
const videoContainer = document.getElementById('video-container');

// Create a new YouTube player instance
const player = new YT.Player(videoContainer, {
    height: '360',
    width: '640',
    videoId: 'YOUR_VIDEO_ID',
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
});

// Function to handle player initialization
function onPlayerReady(event) {
    // Start playing the video when the player is ready
    event.target.playVideo();
}

// Function to handle player state changes
function onPlayerStateChange(event) {
    // Handle video end
    if (event.target.getPlayerState() == YT.PlayerState.ENDED) {
        console.log('Video ended');
    }
}