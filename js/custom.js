// Opacity increase after video loads
setTimeout(
    function() {
        var video = document.getElementsByTagName('video')[0];

            video.onended = function(e) {
                console.log('Video has ended!');
                document.getElementsByClassName('tp-opacity-overlay')[0].style.opacity = 1;
            };
    }, 9000
);