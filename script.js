'use strict'

$(function () {
    // メニュー画面切り替えファンクション
    function toggleMenu() {
        $('.main-nav').toggleClass('show')
        $('.line1').toggleClass('line1-rotate')
        $('.line2').toggleClass('line2-rotate');
        $('.line3').toggleClass('line3-rotate');
    };
    // ボタンがクリックされたとき
    $('.menu-btn, .main-nav a').on('click', function () {
        toggleMenu()
    });
});