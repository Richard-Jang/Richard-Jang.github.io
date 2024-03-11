// Play <i class="bi bi-play-fill"></i> True when autoplay false
// Pause <i class="bi bi-pause-fill"></i> True when autoplay true

const pausePlay = (target, targetButton) => {

    /*
    const targetAttribute = document.getElementsByClassName(target).data-bs-ride;
    //const targetAttribute = targetElement.getAttribute('data-bs-ride');
    const buttonElement = document.getElementsByClassName(targetButton);

    if (targetAttribute == "true") {
        buttonElement.innerText = '<i class="bi bi-pause-fill"></i>';
        targetAttribute = "false";
    } else {
        buttonElement.innerText = '<i class="bi bi-play-fill"></i>';
        targetAttribute = "true";
    }
    */
    const buttonElement = document.getElementsByClassName(targetButton);
    buttonElement.innerText = '<i class="bi bi-play-fill"></i>';
}
