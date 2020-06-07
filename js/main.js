
//меню
//галерея
$('#menu__item').hover(
	function(){ $('#menu__content').addClass('hover') },
);
$('#menu__item').hover(
	function(){ $(this).addClass('menu_hover') },
	function(){ $(this).removeClass('menu_hover') }
);
$('#menu__content').hover(
	function(){ $('#menu__item').addClass('menu_hover') },
	function(){ $('#menu__item').removeClass('menu_hover') }
);
$('#menu__content').hover(
	function(){ $(this).addClass('hover') },
	function(){ $(this).removeClass('hover') },
);
//услуги
$('#menu__item2').hover(
	function(){ $('#menu__content2').addClass('hover') },
);
$('#menu__item2').hover(
	function(){ $(this).addClass('menu_hover') },
	function(){ $(this).removeClass('menu_hover') }
);
$('#menu__content2').hover(
	function(){ $('#menu__item2').addClass('menu_hover') },
	function(){ $('#menu__item2').removeClass('menu_hover') }
);
$('#menu__content2').hover(
	function(){ $(this).addClass('hover') },
	function(){ $(this).removeClass('hover') },
);
//магазин
$('#menu__item3').hover(
	function(){ $('#menu__content3').addClass('hover') },
);
$('#menu__item3').hover(
	function(){ $(this).addClass('menu_hover') },
	function(){ $(this).removeClass('menu_hover') }
);
$('#menu__content3').hover(
	function(){ $('#menu__item3').addClass('menu_hover') },
	function(){ $('#menu__item3').removeClass('menu_hover') }
);
$('#menu__content3').hover(
	function(){ $(this).addClass('hover') },
	function(){ $(this).removeClass('hover') },
);
//форум
$('#menu__item4').hover(
	function(){ $('#menu__content4').addClass('hover') },
);
$('#menu__item4').hover(
	function(){ $(this).addClass('menu_hover') },
	function(){ $(this).removeClass('menu_hover') }
);
$('#menu__content4').hover(
	function(){ $('#menu__item4').addClass('menu_hover') },
	function(){ $('#menu__item4').removeClass('menu_hover') }
);
$('#menu__content4').hover(
	function(){ $(this).addClass('hover') },
	function(){ $(this).removeClass('hover') },
);
//о нас
$('#menu__item5').hover(
	function(){ $('#menu__content5').addClass('hover') },
);
$('#menu__item5').hover(
	function(){ $(this).addClass('menu_hover') },
	function(){ $(this).removeClass('menu_hover') }
);
$('#menu__content5').hover(
	function(){ $('#menu__item5').addClass('menu_hover') },
	function(){ $('#menu__item5').removeClass('menu_hover') }
);
$('#menu__content5').hover(
	function(){ $(this).addClass('hover') },
	function(){ $(this).removeClass('hover') },
);
//выезжающее меню при клике
function open_menu() {
	(function(){ $('#main-nav').addClass('visible animate__animated animate__slideInUp') })();
	(function(){ $('#main-nav').removeClass('hidden') }) ();
	$("#openmenu").replaceWith('<li class="gallery-nav__item" id="closemenu" onclick="close_menu()"><img class="open_menu" src="img/arrows-down.svg"></li>');
}
function close_menu() {
	(function(){ $('#main-nav').addClass('hidden') })();
	(function(){ $('#main-nav').removeClass('visible') }) ();
	$("#closemenu").replaceWith('<li class="gallery-nav__item" id="openmenu" onmouseover="open_menu()"><img class="open_menu" src="img/arrows.svg"></li>');
}
function enlarge1(img) {
	(function(){ $('#gallery').addClass('hidden') })();
	$("#show_img").html('<img src="' + img + '" width="100%">');
}