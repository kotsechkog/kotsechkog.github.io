"use strict";var App={init:function(){+$("#satisfied").text();$.fn.scrollView=function(){return this.each(function(){$("html, body").animate({scrollTop:$(this).offset().top},500)})},this.handlers()},handlers:function(){$(".scroll-to").click(function(e){e.preventDefault(),$("#sticky-header").scrollView()}),$("#scroll-top").click(function(e){e.preventDefault(),$(".start").scrollView()}),$(".features").parallax({imageSrc:"../images/parallax.jpg"}),$("div.swiper-container").click(function(e){App.getLike(e)}),$("#burger").click(function(e){e.preventDefault(),+$(window).scrollTop()<+$("#sticky-header").offset().top&&$("#sticky-header").scrollView(),$("#burger").toggleClass("active"),$("#nav").toggleClass("active")}),$("#icon-search").click(function(){$("#search").toggleClass("active")});new Swiper(".swiper-container",{slidesPerView:3,spaceBetween:30,breakpoints:{1100:{slidesPerView:2,spaceBetween:30},730:{slidesPerView:1}},pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".swiper-container1",{slidesPerView:4,spaceBetween:30,freeMode:!1,pagination:{el:".swiper-pagination1",clickable:!0},breakpoints:{1300:{slidesPerView:3,spaceBetween:30,freeMode:!0},1100:{slidesPerView:2,spaceBetween:30,freeMode:!0},600:{slidesPerView:1,freeMode:!0}}}),new Swiper(".swiper-container2",{navigation:{nextEl:".swiper-button-next2",prevEl:".swiper-button-prev2"}}),new Swiper(".swiper-container3",{slidesPerView:3,spaceBetween:30,breakpoints:{850:{slidesPerView:2,spaceBetween:10},660:{slidesPerView:1}},freeMode:!0,navigation:{nextEl:".swiper-button-next3",prevEl:".swiper-button-prev3"}})},getLike:function(e){"icon-heart"==e.target.className&&(e.preventDefault(),e.target.nextElementSibling.textContent=+e.target.nextElementSibling.textContent+1)}};$(document).ready(function(){App.init()});
//# sourceMappingURL=main.js.map
