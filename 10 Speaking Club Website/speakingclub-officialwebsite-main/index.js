// const text = document.querySelector(".anim");
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = "";

// for (let i = 0; i < splitText.length; i++) {
//     text.innerHTML += "<span>" + splitText[i] + "</span>";
// }

// let char = 0;
// let timer = setInterval(onTick, 50);

// function onTick() {
//     const span = text.querySelectorAll('span')[char];
//     span.classList.add('fade');
//     char++
//     if (char === splitText.length) {
//         complete();
//         return;
//     }
// }

// function complete() {
//     clearInterval(timer);
//     timer = null;
// }

$(document).ready(function() {
    var letters = $('h1').text();
    var nHTML = '';
    for (var letter of letters) {
        nHTML += "<span class='t'>" + letter + "</span>";
    }
    $('h1').html(nHTML);
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.tagline .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.tagline .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
    }).add({
        targets: '.tagline',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });