$("button").click(function() {
    if ($(this).attr("id") === "pauseButton") {
        $('#projectCarousel').carousel('pause');
        $(this).attr("id", "playButton");
        $('i', this).removeClass('bi-pause-fill')
        $('i', this).addClass('bi-play-fill')
    } else {
        $('#projectCarousel').carousel('cycle');
        $(this).attr("id", "pauseButton");
        $('i', this).removeClass('bi-play-fill')
        $('i', this).addClass('bi-pause-fill')
    }
});