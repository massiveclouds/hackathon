// JavaScript Document

var images = [
    "/images/bg1.jpg",
    "/images/bg2.jpg",
    "/images/bg3.jpg"
];

$("div").css("background", "url(" + images[Math.floor(Math.random() * images.length)] + ")");