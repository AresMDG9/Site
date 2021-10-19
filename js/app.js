$(function () {

	let header = $("#header"); /*Обращаемся к элементу по id*/
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll", function () {

		scrollPos = $(this).scrollTop();
		console.log(scrollPos);

	});

	header.addClass("fixed"); /* добавляем header в класс */

});