'use strict'

$(function () {

    // スムーススクロール
    $('a[href^="#"]').click(function () {
        let speed = 500;
        let href = $(this).attr("href")
        /* もしhrefの値が # または "" のとき html を target に代入
        そうでない場合、href を target に代入 */
        let target;
        if (href === "#" || href === "") {
            target = $(html);
        } else {
            target = $(href);
        }
        let header = $('header').height();
        let position = target.offset().top - header;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

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