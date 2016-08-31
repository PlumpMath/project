$(function(){
	$('.type_btn li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var _index = $(this).index();
		$('#type_con').find('.ser').eq(_index).slideDown().siblings().slideUp();
	})
})
$(function(){
	$('#about li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var _index = $(this).index();
		$('#type_con').find('.main_li').eq(_index).slideDown().siblings().slideUp();
	})
})