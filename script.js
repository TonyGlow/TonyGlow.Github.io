document.addEventListener('DOMContentLoaded', () => {
    const fullscreenButtons = document.querySelectorAll('#fullscreen-button');

    fullscreenButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameIframe = button.previousElementSibling.querySelector('iframe');
            if (gameIframe.requestFullscreen) {
                gameIframe.requestFullscreen();
            } else if (gameIframe.mozRequestFullScreen) { // Firefox
                gameIframe.mozRequestFullScreen();
            } else if (gameIframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
                gameIframe.webkitRequestFullscreen();
            } else if (gameIframe.msRequestFullscreen) { // IE/Edge
                gameIframe.msRequestFullscreen();
            }
        });
    });
});
