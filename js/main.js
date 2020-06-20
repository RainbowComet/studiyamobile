
//меню
//галерея
$('#js-menu_item').hover(
	function(){ $('#menu__item').addClass('menu_hover') },
	function(){ $('#menu__item').removeClass('menu_hover') }
	);
$('#js-menu_item').hover(
	function(){ $('#menu__content').addClass('hover') },
	function(){ $('#menu__content').removeClass('hover') }
);
//услуги
$('#js-menu_item2').hover(
	function(){ $('#menu__item2').addClass('menu_hover') },
	function(){ $('#menu__item2').removeClass('menu_hover') }
	);
$('#js-menu_item2').hover(
	function(){ $('#menu__content2').addClass('hover') },
	function(){ $('#menu__content2').removeClass('hover') }
);
//магазин
$('#js-menu_item3').hover(
	function(){ $('#menu__item3').addClass('menu_hover') },
	function(){ $('#menu__item3').removeClass('menu_hover');/* $('.shop__radio-btn').removeAttr("checked") */}
	);
$('#js-menu_item3').hover(
	function(){ $('#menu__content3').addClass('hover') },
	function(){ $('#menu__content3').removeClass('hover'); /*$('.shop__radio-btn').removeAttr("checked") */}
);
//форум
$('#js-menu_item4').hover(
	function(){ $('#menu__item4').addClass('menu_hover') },
	function(){ $('#menu__item4').removeClass('menu_hover') }
	);
$('#js-menu_item4').hover(
	function(){ $('#menu__content4').addClass('hover') },
	function(){ $('#menu__content4').removeClass('hover') }
);
//о нас
$('#js-menu_item5').hover(
	function(){ $('#menu__item5').addClass('menu_hover') },
	function(){ $('#menu__item5').removeClass('menu_hover');$("body").css("overflow", "auto"); }
	);
$('#js-menu_item5').hover(
	function(){ $('#menu__content5').addClass('hover') },
	function(){ $('#menu__content5').removeClass('hover');$("body").css("overflow", "auto"); }
);
//выезжающее меню при клике
function open_menu() {
	(function(){ $('#main-nav').addClass('visible animate__animated animate__slideInUp') })();
	(function(){ $('#main-nav').removeClass('hidden') }) ();
	$("#otherpage__nav").attr("style", "height:200px;");
	$("#openmenu").replaceWith('<li class="gallery-nav__item" id="closemenu" onclick="close_menu()"><img class="open_menu" src="img/arrows-down.svg"></li>');
}
function close_menu() {
	(function(){ $('#main-nav').addClass('hidden') })();
	(function(){ $('#main-nav').removeClass('visible') }) ();
	$("#otherpage__nav").attr("style", "");
	$("#closemenu").replaceWith('<li class="gallery-nav__item" id="openmenu" onmouseover="open_menu()"><img class="open_menu" src="img/arrows.svg"></li>');
}
function enlarge1(img) {
	(function(){ $('#gallery').addClass('hidden') })();
	(function(){ $('#show_img').removeClass('hidden') })();
	(function(){ $('#show_img').addClass('visible') })();
	(function(){ $('#show_img').addClass('picture'+img) })();
	$("#img_number").attr("value", img);
}
function change_img(next_or_prev) {
	let num;
	num = $("#img_number").attr("value");
	let new_num;
	let max_num_of_imgs=6; // макс количество изображений
	if (next_or_prev=='next') {
		if(Number(num)==max_num_of_imgs) new_num=1; 
		else new_num=Number(num)+1;
	}
	else {
		if(Number(num)==1) new_num=max_num_of_imgs;
		else new_num=Number(num)-1;
	}
	(function(){ $('#show_img').removeClass('picture'+num) })();
	(function(){ $('#show_img').addClass('picture'+new_num) })();
	$("#img_number").attr("value", new_num);
}
$('#next').click(
function(){ change_img('next') }
);
$('#prev').click(
function(){ change_img('prev') }
);
function lessen() {
	(function(){ $('#gallery').removeClass('hidden') })();
	$("#show_img").attr("class", "show_img d-flex hidden");
}

/*смена языков анимация*/
function activate_language_box() {
	(function(){ $('#language_box').addClass('activated') })();
}
function animation(lang) {
	activate_language_box();
	$('span').removeClass('animationRU-en');
	$('span').removeClass('animationDE-en');
	$('span').removeClass('animationEN-en');
	$('span').removeClass('animationRU-ru');
	$('span').removeClass('animationDE-ru');
	$('span').removeClass('animationEN-ru');
	$('span').removeClass('animationRU-de');
	$('span').removeClass('animationDE-de');
	$('span').removeClass('animationEN-de');
	(function(){ $('#en').addClass('animation'+lang+'-en') })();
	(function(){ $('#de').addClass('animation'+lang+'-de') })();
	(function(){ $('#ru').addClass('animation'+lang+'-ru') })();
	
}
function enlarge_text (div_id) {
	$('#'+ div_id).addClass('enlarged_text');
	$("body").css("overflow", "hidden");
	$('#'+ div_id).children('.loupe').attr("onclick", "lessen_text('"+div_id+"')");
}
function lessen_text (div_id) {
	$('#'+ div_id).removeClass('enlarged_text');
	$("body").css("overflow", "auto");
	$('#'+ div_id).children('.loupe').attr('onclick', "enlarge_text('" + div_id + "')");
}