'use strict'

$(function () {
    // メニュー画面切り替えファンクション
    function toggleMenu() {
        $('.main-nav').toggleClass('show');
    };
    // ボタンがクリックされたとき
    $('.menu-btn, .main-nav').on('click', function () {
        toggleMenu()
    });
});