
$(document).ready(function(){
    $(".hamburger").click(function(){
         $(".menus").slideToggle();
        $(this).toggleClass("cross");
    });
});


let play_button = document.querySelector('.play-button'),
play_video = document.querySelector('.play-video'),
close_video = document.querySelector('.close-video');


play_button.addEventListener('click',()=>{
    play_video.style.display = "block";
    close_video.style.display = "block";
})

close_video.addEventListener('click',()=>{
    play_video.style.display = "none";
    close_video.style.display = "none";
})














